var http = require("http");

http.createServer(function(request, response){
	var request = require('request');
	request({'url':'https://www.baidu.com', 
			'proxy' : 'http://cn-proxy.cn.oracle.com:80'
	}, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		
	  }
	})  
}).listen(8888);