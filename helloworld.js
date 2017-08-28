var http = require('http');

var server = http.createServer(function(request, response) {
	if (request.url !== '/favicon.ico') {
		console.log('server log: request for hello world');
		response.writeHead(200, {'Content-type': 'text/plain'});
		response.end('Hello World!');
	} else {
		response.end('favicon');
	}
})

var port = 3000;
server.listen(port);

console.log('Server is listening %s port', port);
