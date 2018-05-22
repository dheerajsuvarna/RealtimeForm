function readURL(input) {
  
    if (input.files && input.files[0]) {
        console.log("Worked!!!")
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imageUploadPreview')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}


