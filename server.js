var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
  console.log('User connected to the client!');
  
  socket.on('message', function(message) {
    console.log("Message received: " + message.text);
    io.emit('message', message);
    //socket.broadcast.emit('message', message);
  });
  
  socket.emit('message', {
    text :'Welcome to the chat application'
  });
});

http.listen(PORT, function() {
  console.log("Server started!");
})
