var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");


var mysql = require("mysql");

app.use(express.static('public'));
// parse application/json
app.use(bodyParser.json());                        

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
  res.end('hello');
});

app.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html'));
});

function query(companyId, emailAddress, callback) {
	var result = null;
	var connection = mysql.createConnection({
	  host     : 'busgl0407.us.oracle.com',
	  user     : 'baron',
	  password : 'abc123_',
	  database : 'bdd'
	});

	connection.connect();
	console.log('companyId: ' + companyId);
	console.log('emailAddress: ' + emailAddress);
	connection.query('select * from User_ where companyId = ? and emailAddress = ?', [companyId, emailAddress], function (error, results, fields) {
	  if (error) {
		throw error;
	  }
	  if (results && results.length > 0) {
		console.log('The userId is: ', results[0].userId);
		result = 'Login succeed';
	  } else {
		console.log('Failed to login');
		result = 'Failed to login';
	  }
	  connection.end();
	  callback(result);
	});
}

app.post('/loginAction',function(req,res){
	var companyId = req.body.companyId;
	var emailAddress = req.body.emailAddress;
	var password = req.body.password;
	
	query(companyId, emailAddress, function(result) {
		console.log(result);
		res.end(result);
	});

});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

app.listen(3000);

console.log("Running at Port 3000");