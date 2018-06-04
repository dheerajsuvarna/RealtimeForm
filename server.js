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
var OpenalprApi = require('openalpr_api');
var app = express(); // Create application
var server      = http.createServer(app); // Create the server
var bodyParser = require('body-parser');
var socketio    = require('socket.io').listen(server); // Loads socket

var todolist    = []; // Create the todolist array to store tasks on server
var index;            // A kind of id
app.use(bodyParser.json({limit: '50mb'})); // get info from html forms
app.use(bodyParser.urlencoded({
limit: '50mb',
extended: true
}));
// Use public folder for JS file (Client)
app.use(express.static('public'))

// Display the todolist and the form
.get('/todolist', function(request, response)
{
    response.sendFile(__dirname + '/views/index.html');
})

.get('/sharedDoc', function(request, response)
{
    response.sendFile(__dirname + '/views/sharedDoc.html');
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


.post('/ticket/truck_scan_api',truck_scan_api)

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
    console.log("Update Truck Model")
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
socket.on('dkv_comment', function(comment)
{
    comment = ent.encode(comment);
    console.log("comment ==>" + comment)
   socket.broadcast.emit('dkv_comment', {comment:comment});
});
socket.on('np_comment', function(comment)
{
    comment = ent.encode(comment);
    console.log("comment ==>" + comment)
   socket.broadcast.emit('np_comment', {comment:comment});
});
socket.on('sp_comment', function(comment)
{
    comment = ent.encode(comment);
    console.log("comment ==>" + comment)
   socket.broadcast.emit('sp_comment', {comment:comment});
});
socket.on('truck_comment', function(comment)
{
    comment = ent.encode(comment);
    console.log("comment ==>" + comment)
   socket.broadcast.emit('truck_comment', {comment:comment});
});
socket.on('model_comment', function(comment)
{
    comment = ent.encode(comment);
    console.log("comment ==>" + comment)
   socket.broadcast.emit('model_comment', {comment:comment});
});
socket.on('chat_comment', function(comment)
{
    comment = ent.encode(comment);
    console.log("comment ==>" + comment)
   socket.broadcast.emit('chat_comment', {comment:comment});
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


  /// OPEN alpr identification




function truck_scan_api(request,response){
var api = new OpenalprApi.DefaultApi()
var dataRet;
var imageBytes = request.body.image; // {String} The image file that you wish to analyze encoded in base64 
var secretKey = "sk_af77a2481546119f83fce161"; // {String} The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 
var country = "eu"; // {String} Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config 
var opts = { 
  'recognizeVehicle': 1, // {Integer} If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request 
  'state': "de", // {String} Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns. 
  'returnImage': 0, // {Integer} If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response 
  'topn': 10, // {Integer} The number of results you would like to be returned for plate  candidates and vehicle classifications 
  'prewarp': "" // {String} Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration 
};
var callback = function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log('Vehicle Number Plate ' + JSON.stringify(data.results[0].plate));
    console.log('Vehicle Make ' + data.results[0].vehicle.make[0].name);
    console.log('Vehicle Model ' + data.results[0].vehicle.make_model[0].name);
    return response.send(data);
  }
};
api.recognizeBytes(imageBytes, secretKey, country, opts, callback);
}