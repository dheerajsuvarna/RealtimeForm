/**
 * Real-time Todolist application
 * The server file
 * 
 * @author: Christophe Malo
 * @version: 0.1.0
 */
var express     = require('express'); // Loads Express.js framework
var http        = require('http'); // Loads http module
var ent         = require('ent'); // Loads security module as PHP htmlentities

var application = express(); // Create application
var server      = http.createServer(application); // Create the server

var socketio    = require('socket.io').listen(server); // Loads socket

var todolist    = []; // Create the todolist array to store tasks on server
var index;            // A kind of id

// Use public folder for JS file (Client)
application.use(express.static('public'))

// Display the todolist and the form
.get('/todolist', function(request, response)
{
    response.sendFile(__dirname + '/views/index.html');
})

.get('/xpress', function(request, response)
{
    response.sendFile(__dirname + '/views/index.html');
})

.get('/welcome', function(request, response)
{
    response.sendFile(__dirname + '/views/welcome.html');
})

.get('/ticket/:id', function(request, response)
{
    response.sendFile(__dirname + '/views/ticket.html');
})

// Redirects to todolist homepage if wrong page is called
.use(function(request, response, next)
{
    response.redirect('/welcome');
});


// Manage data exchange with sockets
socketio.sockets.on('connection', function(socket)
{
    socket.emit('updateTask', todolist);
    socket.on('addTask', function(task)
    {
       task = ent.encode(task); // Protect from injection
       socket.broadcast.emit('update', {task:task, index:index});
       // console.log(todolist); // Debug
    });
//<============= Issue ====================>
    socket.on('update', function(task)
    {
       task = ent.encode(task); // Protect from injection
       socket.broadcast.emit('update', {task:task, index:index});
       // console.log(todolist); // Debug
    });
//<============= Number Plate ====================>
socket.on('updateNoPlate', function(noPlate)
{
   noPlate = ent.encode(noPlate); // Protect from injection
   socket.broadcast.emit('updateNoPlate', {noPlate:noPlate, index:index});
   console.log(noPlate); // Debug
});
//<============= DKV Number ====================>
socket.on('updateDkvNo', function(dkvNo)
{
    dkvNo = ent.encode(dkvNo); // Protect from injection
   socket.broadcast.emit('updateDkvNo', {dkvNo:dkvNo, index:index});
   // console.log(todolist); // Debug
});
//<============= Destination ====================>
socket.on('updateDest', function(dest)
{
    dest = ent.encode(dest); // Protect from injection
   socket.broadcast.emit('updateDest', {dest:dest, index:index});
   // console.log(todolist); // Debug
});
//<============= Truck Model ====================>
socket.on('updateTruckModel', function(truckModel)
{
    truckModel = ent.encode(truckModel); // Protect from injection
   socket.broadcast.emit('updateTruckModel', {truckModel:truckModel, index:index});
   // console.log(todolist); // Debug
});
//<============= Tyre Brand ====================>
socket.on('updateTyreBrand', function(tyreBrand)
{
    tyreBrand = ent.encode(tyreBrand); // Protect from injection 
   socket.broadcast.emit('updateTyreBrand', {tyreBrand:tyreBrand, index:index});
   // console.log(todolist); // Debug
});
//<============= Diameter ====================>
socket.on('updateDiameter', function(diameter)
{
    diameter = ent.encode(diameter); // Protect from injection   
   socket.broadcast.emit('updateDiameter', {diameter:diameter, index:index});
   // console.log(todolist); // Debug
});


socket.on('status_2', function(test)
{  
   socket.broadcast.emit('status_2');
});
socket.on('status_3', function(test)
{   
   socket.broadcast.emit('status_3');
});
socket.on('status_4', function(test)
{  
   socket.broadcast.emit('status_4');
});
socket.on('status_5', function(test)
{
   socket.broadcast.emit('status_5');
});

socket.on('issue_comment', function(comment)
{
    comment = ent.encode(comment);
    console.log("comment ==>" + comment)
   socket.broadcast.emit('issue_comment', {comment:comment});
});








    // Delete tasks
    socket.on('deleteTask', function(index)
    {
        // Deletes task from the server todolist array
        todolist.splice(index, 1);
        
        // Updates todolist of all users in real-time - refresh index
        socketio.sockets.emit('updateTask', todolist);
    });
});
server.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d", this.address().port);
  });
