var http = require("http")
var domain = require("domain")

function asyncA(request, callback) {callback();}
function asyncB(request, callback) {callback();}
function asyncC(request, callback) {callback();}

function async(request, callback) {
    // Do something.
    asyncA(request, function (data) {
        // Do something
        asyncB(request, function (data) {
            // Do something
            asyncC(request, function (data) {
                // Do something
                callback(data);
            });
        });
    });
}

http.createServer(function (request, response) {
    var d = domain.create();

    d.on('error', function (err) {
	console.log("Error: %s", err.message)
        response.writeHead(500);
        response.end();
    });

    d.run(function () {
        async(request, function (data) {
            response.writeHead(200);
            response.end("good");
        });
    });
}).listen(2000);
