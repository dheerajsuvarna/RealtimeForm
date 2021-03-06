
var confirm_btn = document.getElementById('confirm');
var status = document.getElementById('status');
var workshop_btn = document.getElementById('workshop_selected');
var tracking_btn = document.getElementById('tracking');
var invoice_btn = document.getElementById('invoice');
var current_status = 0;
var status_line = document.getElementById("status_line");
var tire_size ;
var tire_brand;
var truck_model;
var license_plate;
// Connect to socket.io
var socket = io.connect();
var issue_comment_btn = document.getElementById('issue_comment_btn');
var dkv_comment_btn = document.getElementById('dkv_comment_btn');
var np_comment_btn = document.getElementById('np_comment_btn');
var sp_comment_btn = document.getElementById('sp_comment_btn');
var truck_comment_btn = document.getElementById('truck_comment_btn');
var model_comment_btn = document.getElementById('model_comment_btn');



// On first connect, retrieves all tasks


socket.on('updateTask', function(todolist) {
    $('#todolist').empty(); // Refresh the list
    todolist.forEach(function(task, index) {
        insertTask(task, index);
    });
});



    function notify(){
            let data = [];
            let truck_model = document.getElementById("truckModel");
    let no_plate = document.getElementById("noPlate");
    let tire_brand = document.getElementById("tyreBrand");
    let tire_size = document.getElementById("diameter")
            data.push(tire_brand.value)
            data.push(tire_size.value)
            data.push(no_plate.value)
            data.push(truck_model.value)

            console.log("data ===> " + JSON.stringify(data))
            socket.emit("init",data)  
    }
   
$( document ).ready(function() {
    //getLocation();
    
    var role = getAllUrlParams(window.location.href).role;
    
    let truck_model = document.getElementById("truckModel");
    let no_plate = document.getElementById("noPlate");
    let tire_brand = document.getElementById("tyreBrand");
    let tire_size = document.getElementById("diameter")
    tire_brand.value = getAllUrlParams(window.location.href).tire_brand;
    no_plate.value = getAllUrlParams(window.location.href).no_plate;
    truck_model.value = getAllUrlParams(window.location.href).truck_model;
    tire_size.value = getAllUrlParams(window.location.href).tire_size;
   // var myHeader = document.getElementById("role");
    //myHeader.innerText = "Role : " + role;
    
    


   


    if(role == 'esc'){
        confirm_btn.style.display = 'block';
    }

    if(role != 'esc'){
        confirm_btn.style.display = 'none';
        workshop_btn.style.display = 'none';
        issue_comment_btn.display = 'none';
        dkv_comment_btn.style.display = 'none';
        np_comment_btn.style.display = 'none';
        sp_comment_btn.style.display = 'none';
        truck_comment_btn.style.display = 'none';
        model_comment_btn.style.display = 'none';
    }

    if(current_status >= 2){
   

    }
});
function request_info(){
   console.log("Hello its woeking")
   let comment =  document.getElementById("chat_comment_input").value;
   let writeComment = document.getElementById("chat_comment_write");
   writeComment.innerText  += "\n"+ comment;
   socket.emit('chat_comment', comment);
   comment.value = "";
  
}
function issue_request_info(){
    let comment =  document.getElementById("issue_comment_input").value;
    let writeComment = document.getElementById("write_comment");
    writeComment.innerText  += "\n"+ comment;
    socket.emit('issue_comment', comment);
    comment.value = "";
   
 }
function dkv_request_info(){
    let comment =  document.getElementById("dkv_comment_input").value;
    let writeComment = document.getElementById("dkv_comment_write");
    writeComment.innerText  += "\n"+ comment;
    socket.emit('dkv_comment', comment);
    comment.value = "";
   
 }
 function np_request_info(){
    let comment =  document.getElementById("np_comment_input").value;
    let writeComment = document.getElementById("np_comment_write");
    writeComment.innerText  += "\n"+ comment;
    socket.emit('np_comment', comment);
    comment.value = "";
   
 }
 function sp_request_info(){
    let comment =  document.getElementById("sp_comment_input").value;
    let writeComment = document.getElementById("sp_comment_write");
    writeComment.innerText  += "\n"+ comment;
    socket.emit('sp_comment', comment);
    comment.value = "";
   
 }
 function truck_request_info(){
    let comment =  document.getElementById("truck_comment_input").value;
    let writeComment = document.getElementById("truck_comment_write");
    writeComment.innerText  += "\n"+ comment;
    socket.emit('truck_comment', comment);
    comment.value = "";
   
 }
 function model_request_info(){
    let comment =  document.getElementById("model_comment_input").value;
    let writeComment = document.getElementById("model_comment_write");
    writeComment.innerText  += "\n"+ comment;
    socket.emit('model_comment', comment);
    comment.value = "";
   
 }

function confirm(){
    document.getElementById("status").src = "images/02PreparationWorkshop.svg";
    confirm_btn.style.display = 'none';
    tracking_btn.style.display = 'block';
    current_status = 2;
   // disable_fields();
    socket.emit('status_2', current_status);
}

function tracking(){
    var test = null;
    document.getElementById("status").src = "images/03Servicecar.svg";
    tracking_btn.style.display = 'none';
    invoice_btn.style.display = 'block';
    current_status = 3;
    socket.emit('status_3', test);
}

function invoice(){   
    var test = null;
    current_status = 4;
    document.getElementById("status").src = "images/04Solved.svg";
    socket.emit('status_4', test);
}



$('#todolistForm').submit(function ()
{
    var task = $('#task').val(); 
    socket.emit('addTask', task); 
    insertTask(task, index); 
    $('#task').val('').focus(); 
    return false; 
});

//<============================================ Issue ============================================>
$('#task').blur(function ()
{
    var task = $('#task').val(); // Retrieve the value of field - the task
    socket.emit('addTask', task); // sends task to server, server sends to all other clients connected
    // console.log(task); // Debug
    updateTask(task); // Add task in the sender area - Global index here 
     // Empty the field task and put the focus on it
    return false; // Blocks the classic sending of the form
});


socket.on('issue_comment', function(data) {
     var writeComment = document.getElementById("write_comment");
     writeComment.innerText  += "\n"+ data.comment;
 });

 socket.on('dkv_comment', function(data) {
    var dkv_comment_write = document.getElementById("dkv_comment_write");
    dkv_comment_write.innerText  += "\n"+ data.comment;
});
socket.on('np_comment', function(data) {
    var np_comment_write = document.getElementById("np_comment_write");
    np_comment_write.innerText  += "\n"+ data.comment;
});
socket.on('sp_comment', function(data) {
    var sp_comment_write = document.getElementById("sp_comment_write");
    sp_comment_write.innerText  += "\n"+ data.comment;
});
socket.on('truck_comment', function(data) {
    var truck_comment_write = document.getElementById("truck_comment_write");
    truck_comment_write.innerText  += "\n"+ data.comment;
});
socket.on('make_comment', function(data) {
    var make_comment_write = document.getElementById("make_comment_write");
    make_comment_write.innerText  += "\n"+ data.comment;
});
socket.on('chat_comment', function(data) {
    var chat_comment_write = document.getElementById("chat_comment_write");
    chat_comment_write.innerText  += "\n"+ data.comment;
});

socket.on('update', function(data) {
    updateTask(data.task, data.index); 
     
 });


 socket.on('init', function(data) {
    console.log("got data ===> " + JSON.stringify(data))
    let truck_model = document.getElementById("truckModel");
    let no_plate = document.getElementById("noPlate");
    let tire_brand = document.getElementById("tyreBrand");
    let tire_size = document.getElementById("diameter")
    console.log("tyre brand " + data.tire_brand)
    tire_brand.value = data.tire_brand;
    no_plate.value =  data.no_plate;
    truck_model.value =  data.truck_model;
    tire_size.value =  data.tire_size;
    });


 function updateTask(task, index)
{
    // Use data- attribute for position index in array
    $('#task').val(task);
}
//<=====================================================================================================>
//<============================================ Number Plate ============================================>
$('#noPlate').blur(function ()
{   
    
    var noPlate = $('#noPlate').val(); 
    socket.emit('updateNoPlate', noPlate); 
    updateNoPlate(noPlate);  
    return false; 
});

socket.on('updateNoPlate', function(data) {
    console.log("Getting the Number Plate "+ JSON.stringify(data))
    updateNoPlate(data.noPlate, data.role); 
     
 });

 function updateNoPlate(noPlate)
{
    // Use data- attribute for position index in array
    $('#noPlate').val(noPlate);
    var updatedBy = document.getElementById("updatedBy");
   

}

//<============================================ DKV Number ============================================>
$('#dkvNo').blur(function ()
{
    var dkvNo = $('#dkvNo').val(); // Retrieve the value of field - the task
    socket.emit('updateDkvNo', dkvNo); // sends task to server, server sends to all other clients connected
    // console.log(task); // Debug
    updateDkvNo(dkvNo); // Add task in the sender area - Global index here 
     // Empty the field task and put the focus on it
    return false; // Blocks the classic sending of the form
});

socket.on('updateDkvNo', function(data) {
    updateDkvNo(data.dkvNo, data.index); 
     
 });

 function updateDkvNo(dkvNo, index)
{
    // Use data- attribute for position index in array
    $('#dkvNo').val(dkvNo);
}
//<=====================================================================================================>
//<============================================ Destination ============================================>
$('#dest').blur(function ()
{
    var dest = $('#dest').val(); // Retrieve the value of field - the task
    socket.emit('updateDest', dest); // sends task to server, server sends to all other clients connected
    // console.log(task); // Debug
    updateDest(dest); // Add task in the sender area - Global index here 
     // Empty the field task and put the focus on it
    return false; // Blocks the classic sending of the form
});

socket.on('updateDest', function(data) {
    updateDest(data.dest, data.index); 
     
 });

 function updateDest(dest, index)
{
    // Use data- attribute for position index in array
    $('#dest').val(dest);
}
//<=====================================================================================================>
//<============================================ Truck Model ============================================>
$('#truckModel').blur(function ()
{
    console.log("Reaching here")
    var truckModel = $('#truckModel').val(); // Retrieve the value of field - the task
    socket.emit('updateTruckModel', truckModel); // sends task to server, server sends to all other clients connected
    // console.log(task); // Debug
    updateTruckModel(truckModel); // Add task in the sender area - Global index here 
     // Empty the field task and put the focus on it
    return false; // Blocks the classic sending of the form
});

socket.on('updateTruckModel', function(data) {
    updateTruckModel(data.truckModel, data.index); 
     
 });

 function updateTruckModel(truckModel, index)
{
    // Use data- attribute for position index in array
    $('#truckModel').val(truckModel);
}
//<=====================================================================================================>
//<============================================ Tyre Brand ============================================>
$('#tyreBrand').blur(function ()
{
    var tyreBrand = $('#tyreBrand').val(); // Retrieve the value of field - the task
    socket.emit('updateTyreBrand', tyreBrand); // sends task to server, server sends to all other clients connected
    // console.log(task); // Debug
    updateTyreBrand(tyreBrand); // Add task in the sender area - Global index here 
     // Empty the field task and put the focus on it
    return false; // Blocks the classic sending of the form
});

socket.on('updateTyreBrand', function(data) {
    updateTyreBrand(data.tyreBrand, data.index); 
     
 });

 function updateTyreBrand(tyreBrand, index)
{
    $('#tyreBrand').val(tyreBrand);
}
//<=====================================================================================================>
//<============================================ Diameter ============================================>
$('#diameter').blur(function ()
{
    var diameter = $('#diameter').val(); 
    socket.emit('updateDiameter', diameter); 
    updateDiameter(diameter);
    return false; 
});

socket.on('updateDiameter', function(data) {
    updateDiameter(data.diameter, data.index);   
 });

 function updateDiameter(diameter, index)
{
    $('#diameter').val(diameter);
}
//<=====================================================================================================>
// When receives message, insert the message in the page
socket.on('addTask', function(data) {
    insertTask(data.task, data.index);
    
});

socket.on('status_2', function() {
    changeimg_status2();
    disable_fields();
    
});
socket.on('status_3', function() {
    changeimg_status3();
    
});
socket.on('status_4', function() {
    changeimg_status4();
    
});
socket.on('status_5', function() {
    changeimg_status5();
    
});

function changeimg_status2(){
    document.getElementById("status").src = "images/02PreparationWorkshop.svg";
}
function changeimg_status3(){
    document.getElementById("status").src = "images/03Servicecar.svg";
}
function changeimg_status4(){
    document.getElementById("status").src = "images/04Solved.svg";
}

function disable_fields(){
    document.getElementById("task").disabled = 'true';
    document.getElementById("dkvNo").disabled = 'true';
    document.getElementById("noPlate").disabled = 'true';
    document.getElementById("truckModel").disabled = 'true';
    document.getElementById("tyreBrand").disabled = 'true';
    document.getElementById("diameter").disabled = 'true';
}
/**
 * Add task in the page
 * 
 * @param {int} index
 * @param {string} task
 */
function insertTask(task, index)
{
    // Use data- attribute for position index in array
    $('#todolist').append('<li><a class="delete" href="#" data-index="' + index + '">✘</a> ' + task  + '</li>');
}


// Deletes a task
$('body').on('click', '.delete', function()
{
    socket.emit('deleteTask', $(this).data('index'));
});


function getAllUrlParams(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  
    // we'll store the parameters here
    var obj = {};
  
    // if query string exists
    if (queryString) {
  
      // stuff after # is not part of query string, so get rid of it
      queryString = queryString.split('#')[0];
  
      // split our query string into its component parts
      var arr = queryString.split('&');
  
      for (var i=0; i<arr.length; i++) {
        // separate the keys and the values
        var a = arr[i].split('=');
  
        // in case params look like: list[]=thing1&list[]=thing2
        var paramNum = undefined;
        var paramName = a[0].replace(/\[\d*\]/, function(v) {
          paramNum = v.slice(1,-1);
          return '';
        });
  
        // set parameter value (use 'true' if empty)
        var paramValue = typeof(a[1])==='undefined' ? true : a[1];
  
        // (optional) keep case consistent
        paramName = paramName.toLowerCase();
        paramValue = paramValue.toLowerCase();
  
        // if parameter name already exists
        if (obj[paramName]) {
          // convert value to array (if still string)
          if (typeof obj[paramName] === 'string') {
            obj[paramName] = [obj[paramName]];
          }
          // if no array index number specified...
          if (typeof paramNum === 'undefined') {
            // put the value on the end of the array
            obj[paramName].push(paramValue);
          }
          // if array index number specified...
          else {
            // put the value at that index number
            obj[paramName][paramNum] = paramValue;
          }
        }
        // if param name doesn't exist yet, set it
        else {
          obj[paramName] = paramValue;
        }
      }
    }
  
    return obj;
  }