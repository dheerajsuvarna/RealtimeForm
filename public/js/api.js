
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
        success: function(dataString) {  
           console.log("SUCCESS!!!")
        }  
    });  
    }
    reader.readAsDataURL(input.files[0]);
     }
    }