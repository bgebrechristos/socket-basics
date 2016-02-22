var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//anything express app listens to the server should also listens to


app.use(express.static(__dirname + '/public'));

io.on('connection', function() {
  console.log('User connected via socket.io!')
});
//1st is arg is an event, for this example, on the connection event

http.listen(PORT, function() {
  console.log("Server started!");
})
