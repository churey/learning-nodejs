// execute: node write_small_file.js 1.txt a.txt
var fs = require('fs');

function copy(src, dst) {
	fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(argv) {
	copy(argv[0], argv[1]);
}

// process is a global variable,  process.argv[0] is path the node command, process.argv[1] is the path of executed file, so the command parameter "1.txt" is process.argv[2]
console.log(process.argv.slice(2));
main(process.argv.slice(2));
