var socket = io();

socket.on('connect', function() {
  console.log("Connected to socket.io server");
});

socket.on('message', function(message) {
  //data from the message we created on server.js
  console.log("New Message:\n" + message.text);
});