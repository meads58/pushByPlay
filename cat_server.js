/*
Using just node with http
var http = require('http'); //node built in module

http.createServer (function(req, res) { //call back function
  res.writeHead(200, {//write out a header
    'Content-Type': 'text/plain'
  });
  res.end('Hello World\n');//send the text to the server made the request
}).listen(3000, '127.0.0.1');

console.log('Server running at http:127.0.0.1:3000');
*/
//How to do it using the express framework

var express = require('express');
var app = express();
var bodyParser = require('body-parser');//allows you to ready json

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var cats = require('./routes/cat.js')(app);

var server = app.listen(3000, function () {
  console.log('server running on 127.0.0.1:3000/');
});
