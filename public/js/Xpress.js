$( document ).ready(function() {
    var role = getAllUrlParams(window.location.href).role;
    var myHeader = document.getElementById("role");
    myHeader.innerText = "Role : " + role;
});
// Connect to socket.io
var socket = io.connect('https://shared-doc.herokuapp.com/:8080');

// On first connect, retrieves all tasks
socket.on('updateTask', function(todolist) {
    $('#todolist').empty(); // Refresh the list
    todolist.forEach(function(task, index) {
        insertTask(task, index);
    });
});


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

socket.on('update', function(data) {
    updateTask(data.task, data.index); 
     
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
    updateNoPlate(noPlate,role);  
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