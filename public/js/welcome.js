(function() {
  $(document).ready(function() {
    var walkthrough;
    walkthrough = {
      index: 0,
      nextScreen: function() {
        if (this.index < this.indexMax()) {
          this.index++;
          return this.updateScreen();
        }
      },
      prevScreen: function() {
        if (this.index > 0) {
          this.index--;
          return this.updateScreen();
        }
      },
      updateScreen: function() {
        this.reset();
        this.goTo(this.index);
        return this.setBtns();
      },
      setBtns: function() {
        var $lastBtn, $nextBtn, $prevBtn;
        $nextBtn = $('.next-screen');
        $prevBtn = $('.prev-screen');
        $lastBtn = $('.finish');
        if (walkthrough.index === walkthrough.indexMax()) {
          $nextBtn.prop('disabled', true);
          $prevBtn.prop('disabled', false);
          return $lastBtn.addClass('active').prop('disabled', false);
        } else if (walkthrough.index === 0) {
          $nextBtn.prop('disabled', false);
          $prevBtn.prop('disabled', true);
          return $lastBtn.removeClass('active').prop('disabled', false);
        } else {
          $nextBtn.prop('disabled', false);
          $prevBtn.prop('disabled', false);
          return $lastBtn.removeClass('active').prop('disabled', false);
        }
      },
      goTo: function(index) {
        $('.screen').eq(index).addClass('active');
        return $('.dot').eq(index).addClass('active');
      },
      reset: function() {
        return $('.screen, .dot').removeClass('active');
      },
      indexMax: function() {
        return $('.screen').length - 1;
      },
      closeModal: function() {
        $('.walkthrough, .shade').removeClass('reveal');
        return setTimeout((() => {
          $('.walkthrough, .shade').removeClass('show');
          this.index = 0;
          return this.updateScreen();
        }), 200);
      },
      openModal: function() {
        $('.walkthrough, .shade').addClass('show');
        setTimeout((() => {
          return $('.walkthrough, .shade').addClass('reveal');
        }), 200);
        return this.updateScreen();
      }
    };
    $('.next-screen').click(function() {
      return walkthrough.nextScreen();
    });
    $('.prev-screen').click(function() {
      return walkthrough.prevScreen();
    });
    $('.close').click(function() {
      return walkthrough.closeModal();
    });
    $('.open-walkthrough').click(function() {
      return walkthrough.openModal();
    });
    walkthrough.openModal();
    
    // Optionally use arrow keys to navigate walkthrough
    return $(document).keydown(function(e) {
      switch (e.which) {
        case 37:
          // left
          walkthrough.prevScreen();
          break;
        case 38:
          // up
          walkthrough.openModal();
          break;
        case 39:
          // right
          walkthrough.nextScreen();
          break;
        case 40:
          // down
          walkthrough.closeModal();
          break;
        default:
          return;
      }
      e.preventDefault();
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixRQUFBLENBQUEsQ0FBQTtBQUNoQixRQUFBO0lBQUEsV0FBQSxHQUNFO01BQUEsS0FBQSxFQUFPLENBQVA7TUFFQSxVQUFBLEVBQVksUUFBQSxDQUFBLENBQUE7UUFDVixJQUFHLElBQUMsQ0FBQSxLQUFELEdBQVMsSUFBQyxDQUFBLFFBQUQsQ0FBQSxDQUFaO1VBQ0UsSUFBQyxDQUFBLEtBQUQ7aUJBQ0EsSUFBQyxDQUFBLFlBQUQsQ0FBQSxFQUZGOztNQURVLENBRlo7TUFPQSxVQUFBLEVBQVksUUFBQSxDQUFBLENBQUE7UUFDVixJQUFHLElBQUMsQ0FBQSxLQUFELEdBQVMsQ0FBWjtVQUNFLElBQUMsQ0FBQSxLQUFEO2lCQUNBLElBQUMsQ0FBQSxZQUFELENBQUEsRUFGRjs7TUFEVSxDQVBaO01BWUEsWUFBQSxFQUFjLFFBQUEsQ0FBQSxDQUFBO1FBQ1osSUFBQyxDQUFBLEtBQUQsQ0FBQTtRQUNBLElBQUMsQ0FBQSxJQUFELENBQU0sSUFBQyxDQUFBLEtBQVA7ZUFDQSxJQUFDLENBQUEsT0FBRCxDQUFBO01BSFksQ0FaZDtNQWlCQSxPQUFBLEVBQVMsUUFBQSxDQUFBLENBQUE7QUFDUCxZQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUE7UUFBQSxRQUFBLEdBQVcsQ0FBQSxDQUFFLGNBQUY7UUFDWCxRQUFBLEdBQVcsQ0FBQSxDQUFFLGNBQUY7UUFDWCxRQUFBLEdBQVcsQ0FBQSxDQUFFLFNBQUY7UUFFWCxJQUFHLFdBQVcsQ0FBQyxLQUFaLEtBQXFCLFdBQVcsQ0FBQyxRQUFaLENBQUEsQ0FBeEI7VUFDRSxRQUFRLENBQUMsSUFBVCxDQUFjLFVBQWQsRUFBMEIsSUFBMUI7VUFDQSxRQUFRLENBQUMsSUFBVCxDQUFjLFVBQWQsRUFBMEIsS0FBMUI7aUJBQ0EsUUFB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TyxDQUFDLENBQUMsS0FBVDtBQUFBLGFBQ08sRUFEUDs7VUFHSSxXQUFXLENBQUMsVUFBWixDQUFBO0FBRkc7QUFEUCxhQUlPLEVBSlA7O1VBTUksV0FBVyxDQUFDLFNBQVosQ0FBQTtBQUZHO0FBSlAsYUFPTyxFQVBQOztVQVNJLFdBQVcsQ0FBQyxVQUFaLENBQUE7QUFGRztBQVBQLGFBVU8sRUFWUDs7VUFZSSxXQUFXLENBQUMsVUFBWixDQUFBO0FBRkc7QUFWUDtBQWNJO0FBZEo7TUFlQSxDQUFDLENBQUMsY0FBRixDQUFBO0lBaEJrQixDQUFwQjtFQWhGZ0IsQ0FBbEI7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5IC0+XG4gIHdhbGt0aHJvdWdoID1cbiAgICBpbmRleDogMFxuICAgIFxuICAgIG5leHRTY3JlZW46IC0+XG4gICAgICBpZiBAaW5kZXggPCBAaW5kZXhNYXgoKVxuICAgICAgICBAaW5kZXgrK1xuICAgICAgICBAdXBkYXRlU2NyZWVuKClcblxuICAgIHByZXZTY3JlZW46IC0+XG4gICAgICBpZiBAaW5kZXggPiAwXG4gICAgICAgIEBpbmRleC0tXG4gICAgICAgIEB1cGRhdGVTY3JlZW4oKVxuICAgICAgICBcbiAgICB1cGRhdGVTY3JlZW46IC0+XG4gICAgICBAcmVzZXQoKVxuICAgICAgQGdvVG8gQGluZGV4XG4gICAgICBAc2V0QnRucygpXG4gICAgICBcbiAgICBzZXRCdG5zOiAtPlxuICAgICAgJG5leHRCdG4gPSAkKCcubmV4dC1zY3JlZW4nKVxuICAgICAgJHByZXZCdG4gPSAkKCcucHJldi1zY3JlZW4nKVxuICAgICAgJGxhc3RCdG4gPSAkKCcuZmluaXNoJylcbiAgICAgIFxuICAgICAgaWYgd2Fsa3Rocm91Z2guaW5kZXggPT0gd2Fsa3Rocm91Z2guaW5kZXhNYXgoKVxuICAgICAgICAkbmV4dEJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAkcHJldkJ0bi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgJGxhc3RCdG4uYWRkQ2xhc3MoJ2FjdGl2ZScpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICBcbiAgICAgIGVsc2UgaWYgd2Fsa3Rocm91Z2guaW5kZXggPT0gMFxuICAgICAgICAkbmV4dEJ0bi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKVxuICAgICAgICAkcHJldkJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpXG4gICAgICAgICRsYXN0QnRuLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpXG4gICAgICAgIFxuICAgICAgZWxzZVxuICAgICAgICAkbmV4dEJ0bi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKVxuICAgICAgICAkcHJldkJ0bi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKVxuICAgICAgICAkbGFzdEJ0bi5yZW1vdmVDbGFzcygnYWN0aXZlJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKVxuXG5cbiAgICBnb1RvOiAoaW5kZXgpIC0+XG4gICAgICAkKCcuc2NyZWVuJykuZXEoaW5kZXgpLmFkZENsYXNzICdhY3RpdmUnXG4gICAgICAkKCcuZG90JykuZXEoaW5kZXgpLmFkZENsYXNzICdhY3RpdmUnXG5cbiAgICByZXNldDogLT5cbiAgICAgICQoJy5zY3JlZW4sIC5kb3QnKS5yZW1vdmVDbGFzcyAnYWN0aXZlJ1xuXG4gICAgaW5kZXhNYXg6IC0+XG4gICAgICAkKCcuc2NyZWVuJykubGVuZ3RoIC0gMVxuXG4gICAgY2xvc2VNb2RhbDogLT5cbiAgICAgICQoJy53YWxrdGhyb3VnaCwgLnNoYWRlJykucmVtb3ZlQ2xhc3MoJ3JldmVhbCcpXG4gICAgICBzZXRUaW1lb3V0ICg9PlxuICAgICAgICAkKCcud2Fsa3Rocm91Z2gsIC5zaGFkZScpLnJlbW92ZUNsYXNzKCdzaG93JylcbiAgICAgICAgQGluZGV4ID0gMFxuICAgICAgICBAdXBkYXRlU2NyZWVuKClcbiAgICAgICksIDIwMFxuXG4gICAgb3Blbk1vZGFsOiAtPlxuICAgICAgJCgnLndhbGt0aHJvdWdoLCAuc2hhZGUnKS5hZGRDbGFzcygnc2hvdycpXG4gICAgICBzZXRUaW1lb3V0ICg9PlxuICAgICAgICAkKCcud2Fsa3Rocm91Z2gsIC5zaGFkZScpLmFkZENsYXNzKCdyZXZlYWwnKVxuICAgICAgKSwgMjAwXG4gICAgICBAdXBkYXRlU2NyZWVuKClcblxuICAkKCcubmV4dC1zY3JlZW4nKS5jbGljayAtPlxuICAgIHdhbGt0aHJvdWdoLm5leHRTY3JlZW4oKVxuXG4gICQoJy5wcmV2LXNjcmVlbicpLmNsaWNrIC0+XG4gICAgd2Fsa3Rocm91Z2gucHJldlNjcmVlbigpXG5cbiAgJCgnLmNsb3NlJykuY2xpY2sgLT5cbiAgICB3YWxrdGhyb3VnaC5jbG9zZU1vZGFsKClcbiAgICBcbiAgJCgnLm9wZW4td2Fsa3Rocm91Z2gnKS5jbGljayAtPlxuICAgIHdhbGt0aHJvdWdoLm9wZW5Nb2RhbCgpXG4gICAgXG4gIHdhbGt0aHJvdWdoLm9wZW5Nb2RhbCgpXG4gXG4gICMgT3B0aW9uYWxseSB1c2UgYXJyb3cga2V5cyB0byBuYXZpZ2F0ZSB3YWxrdGhyb3VnaFxuICAkKGRvY3VtZW50KS5rZXlkb3duIChlKSAtPlxuICAgIHN3aXRjaCBlLndoaWNoXG4gICAgICB3aGVuIDM3XG4gICAgICAgICMgbGVmdFxuICAgICAgICB3YWxrdGhyb3VnaC5wcmV2U2NyZWVuKClcbiAgICAgIHdoZW4gMzhcbiAgICAgICAgIyB1cFxuICAgICAgICB3YWxrdGhyb3VnaC5vcGVuTW9kYWwoKVxuICAgICAgd2hlbiAzOVxuICAgICAgICAjIHJpZ2h0XG4gICAgICAgIHdhbGt0aHJvdWdoLm5leHRTY3JlZW4oKVxuICAgICAgd2hlbiA0MFxuICAgICAgICAjIGRvd25cbiAgICAgICAgd2Fsa3Rocm91Z2guY2xvc2VNb2RhbCgpXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVyblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVybiJdfQ==
//# sourceURL=coffeescript

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the crurrent tab
var noOfAxis;
var truckType;
var middleAxis;
var truckModel;
var tyreBrand;
var tyreDiameter;
var tyreRadius;
var tyreWidth;
var pos_Longitude;
var pos_Latitude;
var licensePlateNumber = document.getElementById('licenseplates'); 
var card1 = document.getElementById('card1'); 
var card2 = document.getElementById('card2'); 
var card3 = document.getElementById('card3'); 
var issue = document.getElementById('issue');
var dkv_card_number = card1 + card2 + card3;
function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Done";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}
function truck(type){
    truckType = type;
    nextPrev(1);
}

function model(name){
    truckModel = name;
    nextPrev(1);
}

function middle(type){
    middleAxis = type;
    nextPrev(1);
}

function brand(name){
    tyreBrand = name;
    nextPrev(1);
}

function axis(n){
    noOfAxis = n; 
    var config2Image = document.getElementById("axisConfig2");
    var axis2 = document.getElementById("2axis");
    var axis3_1 = document.getElementById("3axis1");
    var axis3_2 = document.getElementById("3axis2");
    var axis4 = document.getElementById("4axis");
    if(noOfAxis == 2){
        config2Image.src = "assets/images/Axis Type Definition/2AxisTypeDefinition.png";
        axis2.style.display = "block";
        axis3_1.style.display = "none";
        axis3_2.style.display = "none";
        axis4.style.display = "none";
    }else if(noOfAxis == 3){
        config2Image.src = "assets/images/Axis Type Definition/3AxisTypeDefinition.png"; 
        axis2.style.display = "none";
        axis3_1.style.display = "block";
        axis3_2.style.display = "none";
        axis4.style.display = "none";
    }else{
        config2Image.src = "assets/images/Axis Type Definition/4AxisTypeDefinition.png";
        axis2.style.display = "none";
        axis3_1.style.display = "none";
        axis3_2.style.display = "none";
        axis4.style.display = "block";
    }
    
    nextPrev(1);
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    // if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
    //nextPrev(-1);
}

// function validateForm() {
//   // This function deals with validation of the form fields
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   // A loop that checks every input field in the current tab:
//   for (i = 0; i < y.length; i++) {
//     // If a field is empty...
//     if (y[i].value == "") {
//       // add an "invalid" class to the field:
//       y[i].className += " invalid";
//       // and set the current valid status to false
//       valid = false;
//     }
//   }
//   // If the valid status is true, mark the step as finished and valid:
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid; // return the valid status
// }

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}


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

function confirm(){
    alert("\n DKV Card Numer = " + dkv_card_number +
    "\n Issue = " + issue +
    "\n Model of the Truck = " + truckModel +
    "\n Type of Truck = " + truckType +
    "\n Number of Axis = " + noOfAxis +
    "\n Tyre Brand = " + tyreBrand +
    "\n Diameter of the Tyre = " + tyreDiameter +
    "\n Location : Longitutude = " + pos_Longitude + " and Latitude = " + pos_Latitude +
    "\n License Plate Number = " + licensePlateNumber )
}

function getLocation(){
    var msg;

    /**
     first, test for feature support
     **/
    if('geolocation' in navigator){
// geolocation is supported :)
        requestLocation();
    }else{
// no geolocation :(
        msg = "Sorry, looks like your browser doesn't support geolocation";
        outputResult(msg); // output error message
        $('.pure-button').removeClass('pure-button-primary').addClass('pure-button-success'); // change button style
    }

    /***
     requestLocation() returns a message, either the users coordinates, or an error message
     **/
    function requestLocation(){
        /**
         getCurrentPosition() below accepts 3 arguments:
         a success callback (required), an error callback  (optional), and a set of options (optional)
         **/

        var options = {
            // enableHighAccuracy = should the device take extra time or power to return a really accurate result, or should it give you the quick (but less accurate) answer?
            enableHighAccuracy: false,
            // timeout = how long does the device have, in milliseconds to return a result?
            timeout: 5000,
            // maximumAge = maximum age for a possible previously-cached position. 0 = must return the current position, not a prior cached position
            maximumAge: 0
        };

// call getCurrentPosition()
        navigator.geolocation.getCurrentPosition(success, error, options);

// upon success, do this
        function success(pos){
            // get longitude and latitude from the position object passed in
            var lng = pos.coords.longitude;
            var lat = pos.coords.latitude;
            pos_Latitude = pos.coords.longitude;
            pos_Latitude = pos.coords.latitude;

            // and presto, we have the device's location!
            msg = 'You appear to be at longitude: ' + lng + ' and latitude: ' + lat  + '<img src="https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=300x300&maptype=roadmap&markers=color:red%7Clabel:A%7C' + lat + ',' + lng+ '&sensor=false">';
            outputResult(msg); // output message
            $('.pure-button').removeClass('pure-button-primary').addClass('pure-button-success'); // change button style
        }

// upon error, do this
        function error(err){
            // return the error message
            msg = 'Error: ' + err + ' :(';
            outputResult(msg); // output button
            $('.pure-button').removeClass('pure-button-primary').addClass('pure-button-error'); // change button style
        }
    } // end requestLocation();

    /***
     outputResult() inserts msg into the DOM
     **/
    function outputResult(msg){
        $('.result').addClass('result').html(msg);
    }
} // end getLocation()

// attach getLocation() to button click
$('.pure-button').on('click', function(){
// show spinner while getlocation() does its thing
    $('.result').html('<i class="fa fa-spinner fa-spin"></i>');
    getLocation();
});