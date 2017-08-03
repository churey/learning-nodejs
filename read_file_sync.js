var fs = require("fs");

try {
	var data = fs.readFileSync("1.txt");
	console.log("file content:" + data);
} catch (err) {
	console.log("error occured");
}
console.log("read finished");
