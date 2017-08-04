var fs = require('fs');
var files = ['a.txt','b.txt','c.txt'];

for(var i=0; i < files.length; i++) {
    (function(i) {
	console.log('start read ' + files[i])
        fs.readFile(files[i], 'utf-8', function(err, contents) {
            console.log(files[i] + ': ' + contents);
            console.log('finish read ' + files[i])
        });
    })(i);
}
