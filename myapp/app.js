var express = require('express')

var app = express();
// The next() function is not a part of the Node.js or Express API, but is the third argument that is passed to the middleware function
var myLogger1 = function(req, res, next) {
	console.log('LOGGED 1');
	next();
}

var myLogger2 = function(req, res, next) {
	console.log('LOGGED 2');
	next();
}

// To load the middleware function, call app.use(), specifying the middleware function
app.use(myLogger2);
app.get('/', function(req, res) {
	res.send('rendering home page');
})



// If myLogger1 is loaded after the route to the root path, the request never reaches it and the app doesn’t print “LOGGED”, because the route handler of the root path terminates the request-response cycle.
app.use(myLogger1);

// middleware file    my-middleware.js
var myMiddleware = require('./middleware/my-middleware');
app.use(myMiddleware({'name':'Baron', 'age' : '6'}));

module.exports = app;
