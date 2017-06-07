var http = require('http');
 
var port = 8081;
 
var node = http.createServer();
node.on('request', function(request, response) {
    response.writeHead(200);
    console.log(request.method);
    console.log(request.headers);
    console.log(request.url);
    response.write('Hello there its Dianne');
    response.end();
});
 
node.listen(port);
console.log('Browse to http://127.0.0.1:' + port);
