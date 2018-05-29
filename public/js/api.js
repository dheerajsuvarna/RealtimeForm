
$('#OpenImgUpload').click(function(){ $('#imgupload').trigger('click'); });

function readURL(input) {
    if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
        
      var image = e.target.result.split(',')[1];
      $.ajax({  
        type: "POST",  
        url: "/ticket/truck_scan_api",  
        data: {'image': image},  
        
        success: function(data) {  
            // alert('Vehicle Number Plate ' + data.results[0].plate +
            //  '\n Vehicle Make ' + data.results[0].vehicle.make[0].name + 
            //  '\n Vehicle Model ' + data.results[0].vehicle.make_model[0].name);  
             let btn = document.getElementById("dataProof");
             let prevDiv = document.getElementById("truckScanPlaceholder");
             let npr = document.getElementById("numberPlateResult");
             let mor = document.getElementById("modelResult");
             let axis = document.getElementById("makeResult");
             npr.value = data.results[0].plate ;
             mor.value = data.results[0].vehicle.make[0].name;
             axis.value = "2 Axis"
             btn.style.display = "block";
             prevDiv.style.display = "none";
        }  
    });  
    }
    reader.readAsDataURL(input.files[0]);
     }
    }