 var diameter_slider = document.getElementById("diameter");
 var radius_slider = document.getElementById("radius");
 var width_slider = document.getElementById("width");
 var diameter_value = document.getElementById("diameter_value");
 var radius_value = document.getElementById("radius_value");
 var width_value = document.getElementById("width_value");
 var tire_size ;
var tire_brand;
var truck_model = "Mercedes";
var license_plate = "YAKU900"
 diameter_value.innerHTML = diameter_slider.value;
 radius_value.innerHTML = radius_slider.value;
 width_value.innerHTML = width_slider.value;
 tyreDiameter = diameter_slider.value;
 tyreRadius = radius_slider.value;
 tyreWidth = width_slider.value;
 // Update the current slider value (each time you drag the slider handle)
 diameter_slider.oninput = function() {
     diameter_value.innerHTML = this.value;
 }
 radius_slider.oninput = function() {
     radius_value.innerHTML = this.value;
 }
 width_slider.oninput = function() {
     width_value.innerHTML = this.value;
 }

 function revealSearch(){
     console.log("Searh Bar Reveal")
        if(document.getElementById("search_bar").style.display == 'none'){
            document.getElementById("search_bar").style.display = 'block'
        }else{
            document.getElementById("search_bar").style.display = 'none'
        }
}

function tireSelect(brand){
    tire_brand = brand;
    let img = document.getElementById("estimateImg")
    
        img.src = "/images/EstimationBridgestone.svg"
        switchTab(7)
   
}

function sendInfo(){
        
    tire_size = diameter_slider.value + " / " + radius_slider.value + " R " + width_slider.value;
    //tire_size = "385 / 60 R 22.5";
  console.log("Reaching Here=============>")      
      var data = [];
      data.push(tire_size);
      data.push(tire_brand);
      data.push(truck_model);
      data.push(license_plate);

      $.ajax({  
        type: "POST",  
        url: "/ticket/infoForDoc",  
        data: {'data': data},  
        
        success: function(data) {  
            console.log("worked")
        }  
    });  
    }