var http = require('http');

var server = http.createServer(function(request, response) {
	console.log('server log: request for hello world');
	response.writeHead(200, {'Content-type': 'text/plain'});
	response.end('Hello World!');
});

var port = 3000;
server.listen(port);

console.log('Server is listening %s port', port);
