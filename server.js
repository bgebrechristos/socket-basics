var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
//anything express app listens to the server should also listens to


app.use(express.static(__dirname + '/public'));

http.listen(PORT, function() {
  console.log("Server started!");
})
