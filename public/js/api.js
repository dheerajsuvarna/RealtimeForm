
$('#OpenImgUpload').click(function(){ $('#imgupload').trigger('click'); });

function readURL(input) {
    // if (input.files && input.files[0]) {
    // var reader = new FileReader();
    // reader.onload = function (e) {
    //     $('#loading').html('<img src="http://preloaders.net/preloaders/287/Filling%20broken%20ring.gif">');
    //   var image = e.target.result.split(',')[1];
    //   $.ajax({  
    //     type: "POST",  
    //     url: "/ticket/truck_scan_api",  
    //     data: {'image': image},  
        
    //     success: function(data) {  
    //         // alert('Vehicle Number Plate ' + data.results[0].plate +
    //         //  '\n Vehicle Make ' + data.results[0].vehicle.make[0].name + 
    //         //  '\n Vehicle Model ' + data.results[0].vehicle.make_model[0].name);  
    //         console.log(JSON.stringify(data))
    //          let btn = document.getElementById("dataProof");
    //          let prevDiv = document.getElementById("truckScanPlaceholder");
    //          let npr = document.getElementById("numberPlateResult");
    //          let mor = document.getElementById("modelResult");
    //          let axis = document.getElementById("makeResult");
    //          let tick = document.getElementById("camera_tick")
    //          let cam = document.getElementById("camera_action");
    //          cam.style.display = "none";
    //          tick.style.display = "block"
    //          btn.style.display = "block";
    //          prevDiv.style.display = "none";
    //      truck_model = data.results[0].vehicle.make[0].name;
    //      license_plate =  data.results[0].plate ;
    //          npr.value = data.results[0].plate ;
    //          mor.value = data.results[0].vehicle.make[0].name;
    //          axis.value = "2 Axis"
             
    //     }  
    // });  
    // }
    // reader.readAsDataURL(input.files[0]);
    //  }
    $('#loading').html('<img src="http://preloaders.net/preloaders/287/Filling%20broken%20ring.gif">');
    function showDiv(){
        let btn = document.getElementById("dataProof");
                let prevDiv = document.getElementById("truckScanPlaceholder");
                let npr = document.getElementById("numberPlateResult");
                  let mor = document.getElementById("modelResult");
                  let axis = document.getElementById("makeResult");
                  let tick = document.getElementById("camera_tick")
                  let cam = document.getElementById("camera_action");
                  cam.style.display = "none";
                  tick.style.display = "block"
                  btn.style.display = "block";
                  prevDiv.style.display = "none";
              truck_model = "Mercedes"
              license_plate =  "SYL3621"
                  npr.value = "SYL3621"
                  mor.value = "Mercedes"
                  axis.value = "2-Axis" 
    }
    setTimeout(function(){
        showDiv();
      }, 1000);
    }