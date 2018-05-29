 var diameter_slider = document.getElementById("diameter");
 var radius_slider = document.getElementById("radius");
 var width_slider = document.getElementById("width");
 var diameter_value = document.getElementById("diameter_value");
 var radius_value = document.getElementById("radius_value");
 var width_value = document.getElementById("width_value");
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
    
    let img = document.getElementById("estimateImg")
    if(brand==1){
        console.log("Bridgestone")
        img.src = "/images/EstimationBridgestone.svg"
        switchTab(7)
    }else if(brand==2){
        console.log("dunlop")
        img.src = "/images/EstimationDunlop.svg"
        switchTab(7)
    }else {
        console.log("continental")
        img.src = "/images/EstimationContinental.svg"
        switchTab(7)
    }
}