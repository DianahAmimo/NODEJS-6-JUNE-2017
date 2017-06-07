// var http = require('http');

// var request = http.request({
//   host: 'example.com',
//   path: '/endpoint',
//   port: 443,
//   method: 'POST',
//   headers: {
//     'Authorization': clientId + ':' + signature(endpoint, postBody), 
//     'Content-Type': 'application/json',
//     'Content-Length': postBody.length
//   }
// }, function(response) {
//   var reply = '';
//   response.on('data', function(content) {
//     reply += content;
//   });

//   response.on('end', function() {
//     return cb(reply);
//   });
// });

// request.write(postBody);
// request.end();

// var fs = require("fs");

// // Asynchronous - Opening File
// console.log("Going to open file!");
// fs.open('DAILY BLOG#1 .docx', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//   console.log("File opened successfully!");     
// });


var http = require("http"); 
http.createServer(function (request, response) {
  fs.readFile("'DAILY BLOG#1 .docx'", function(err, data){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(data);
  response.end();
});
// Send the HTTP header
// HTTP Status: 200 : OK
// Content Type: text/plain
response.writeHead(200, {'Content-Type': 'text/plain'});
// Send the response body as "Hello World"
response.end('Hello World, I Love NODE!\n'); }).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');


// var fs = require("fs");

// console.log("Going to get file info!");
// fs.open('DAILY BLOG#1 .docx', 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//    // console.log(stats);
//    console.log("Got file info successfully!");
   
   // Check file type
   // console.log("isFile ? " + stats.isFile());
   // console.log("isDirectory ? " + stats.isDirectory());    
// });