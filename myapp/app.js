var express = require('express');

var app = express()

// route handler
app.get('/', function(req, res){
	res.send('hello world')
}) 

app.post('/', function(req, res) {
	res.send('POST request received');
})

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  // next() // pass control to the next handler
  res.send('aaaa');
})

// regular expression
// This route path will match /abe and /abcde.
app.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e')
})

// This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})


// parameters, polulate the route parameters to req.params(json object)
app.get('/users/:userId/books/:bookId', function(req, res) {
	res.send(req.params);
})

// next usage, multi callback
app.get('/example/b', function(req, res, next) {
	console.log('the response will continue to the next function...')
	next()
}, function(req, res) {
	res.send('Hello from b')
})


// must use some kind of res.send() to terminate the request-response cycle, or the client request will be left hanging


// route chain
app.route('/book')
	.get(function(req, res) {
		res.send('GET book')
	})
	.post(function(req, res){
		res.send('POST book')
	})

// express.Route   birds.js
var birds = require('./routes/birds');
app.use('/birds1', birds)

module.exports = app;
