var socket = io();
//io variable is defined when we load the socket io library in html
//this connects the server to the backend 

socket.on('connect', function() {
  console.log("Connected to socket.io server");
});

socket.on('message', function(message) {
  //callback function gets data from the message we created on server.js
  console.log("New Message:\n" + message.text);
  
  jQuery('.messages').append('<p>' + message.text + '</p>')
});

//Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
  event.preventDefault();
  //handle the form submission on our own when using socket and ajax request
  var $message = $form.find('input[name=message]');
  socket.emit('message', {
    text: $message.val()
  });
  
  $message.val('');
});