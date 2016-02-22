var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//anything express app listens to the server should also listens to


app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
  console.log('User connected via socket.io!');
  
  socket.on('message', function(message) {
    console.log("Message received: " + message.text);
    
    socket.broadcast.emit('message', message);
    //sends it to everybody but the person who sent it
    //if you want to send it including the perosn who send it, then use io.emit
  });
  socket.emit('message', {
    text :'Welcome to the chat application'
  })
});
//1st is arg is an event, for this example, on the connection event

http.listen(PORT, function() {
  console.log("Server started!");
})
