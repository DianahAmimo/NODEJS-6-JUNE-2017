var http = require('http');

var request = http.request({
  host: 'example.com',
  path: '/endpoint',
  port: 443,
  method: 'POST',
  headers: {
    'Authorization': clientId + ':' + signature(endpoint, postBody), // Don't worry about this line, ignore it for now
    'Content-Type': 'application/json',
    'Content-Length': postBody.length
  }
}, function(response) {
  var reply = '';
  response.on('data', function(chunk) {
    reply += chunk;
  });

  response.on('end', function() {
    return cb(reply);
  });
});

request.write(postBody);
request.end();
