var fs = require("fs");
console.log("start read...");
fs.readFile("1.txt", function(err, data) {
	if (err) {
		console.log("error occured");
		console.log(err);
	} else {
		console.log("file content: " + data);
	}
})
console.log("read file finished");
