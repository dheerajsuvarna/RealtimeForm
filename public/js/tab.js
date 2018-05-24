var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the crurrent tab
var noOfAxis;
var truckType;
var middleAxis;
var issueType;
var tyreBrand;
function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0 ) {
        document.getElementById("prevDiv").style.display = "none";
    } else {
        document.getElementById("prevDiv").style.display = "inline";
    }
    // if (n == (x.length - 1)) {
    //     document.getElementById("nextBtn").innerHTML = "Submit";
    // } else {
    //     document.getElementById("nextBtn").innerHTML = "Next";
    // }
    //... and run a function that will display the correct step indicator:
    //fixStepIndicator(n)
}
function truck(type){
    truckType = type;
    nextPrev(1);
}

function issue(type){
    issueType = type;
    nextPrev(1);
}
function brand(type){
    issueType = type;
    nextPrev(1);
}
function middle(type){
    middleAxis = type;
    console.log("Middle Axis Type + " + middleAxis)
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

    // Otherwise, display the correct tab:
    showTab(currentTab);
    //nextPrev(-1);
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



