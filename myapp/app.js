var express = require('express');

var app = express();
var request = require('request');
var proxyUrl = 'http://cn-proxy.cn.oracle.com:80';
var proxiedRequest = request.defaults({'proxy': proxyUrl});

var oneHttpRequest = function(req, res) {
	console.log('request start...');
	proxiedRequest('http://www.google.com', function (error, response, body) {
		console.log(body);
		if (!error && response.statusCode == 200) {
			console.log(body) // Print the google web page.
		}
		console.log('request finish...');
	})
}

app.get('/', function(req, res) {
	oneHttpRequest();
})

module.exports = app;
