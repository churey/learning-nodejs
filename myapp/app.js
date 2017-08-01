var express = require('express');
var app = express();

/*
// =================================================================
// Application-level middleware

// Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.
var myLoggerTime = function(req, res, next) {
	console.log('LOGGED');
	next();
}

// This example shows a middleware function with no mount path. The function is executed every time the app receives a request.
app.use(function(req, res, next) {
	console.log('app.use without path: my log time');
	next();
})

// This example shows a middleware function mounted on the /user/:id path. The function is executed for any type of HTTP request on the /user/:id path.
app.use('/user/:id', function(req, res, next) {
	console.log('app.use with path: user log')
	next();
})

// This example shows a route and its handler function (middleware system). The function handles GET requests to the /user/:id path.
app.get('/user/:id', function(req, res, next) {
	console.log('app.get: user log');
	next();
})


// skip the rest of the middleware functions, use next('route')
app.get('/book/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page
  res.send('regular')
})

// this is the next route, handler for the /user/:id path, which renders a special page
app.get('/book/:id', function (req, res, next) {
  res.send('special')
})

*/


/*
// =================================================================
// Router-level middleware
// Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().
// Load router-level middleware by using the router.use() and router.METHOD() functions.
var router = express.Router();
router.use(function(req, res, next) {
	console.log('app.use without path: my log time');
	next();
})

router.use('/user/:id', function(req, res, next) {
	console.log('app.use with path: user log')
	next();
})

router.get('/user/:id', function(req, res, next) {
	console.log('app.get: user log');
	next();
})


// skip the rest of the middleware functions, use next('route')
router.get('/book/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page
  res.send('regular')
})

// this is the next route, handler for the /user/:id path, which renders a special page
router.get('/book/:id', function (req, res, next) {
  res.send('special')
})

app.use('/', router);
*/

// =================================================================
// Error-handling middleware
// Error-handling middleware always takes four arguments
app.use(function (err, req, res, next) {
	console.error(err.stack)
	res.status(500).send('Something broke!')
})

// =================================================================
// Built-in middleware
// The only built-in middleware function in Express is express.static. This function is based on serve-static, and is responsible for serving static assets such as HTML files, images, and so on.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}
// go to APP_HOME/public to find static files
app.use(express.static('public', options))
// test http://localhost:3000/1.png


// =================================================================
// Third-party middleware
// npm install cookie-parser
var cookieParser = require('cookie-parser')
// load the cookie-parsing middleware
app.use(cookieParser())

module.exports = app;
