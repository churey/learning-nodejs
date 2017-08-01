var express = require('express');

var app = express();

app.get('/a_route_behind_paywall',
  function checkIfPaidSubscriber (req, res, next) {
    if (!req.hasPaid) {
      // continue handling this requests
	  next('aaa')   // error occured
    }
    else{
      next();
    }
  }, function getPaidContent (req, res, next) {
    PaidContent.find(function (err, doc) {
	  console.log('**************');
      if (err) return next(err)
      res.json(doc)
    })
  })

  
var logError = function(err, req, res, next) {
	console.log(err.stack);
	console.log('log error occured');
	next(err);
}

app.use('/a_route_behind_paywall', logError);
app.use('/a_route_behind_paywall', function(err, req, res, next) {
	console.log('log error occured 2');
	next();
});
app.use('/a_route_behind_paywall', function(req, res, next) {
	res.send('render page');
});


module.exports = app;
