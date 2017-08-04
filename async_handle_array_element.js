// all element can be async executed, but before the array be handled finished, the main processd
var async = function(e, callback) {
	setTimeout(function() {
		console.log("print: " + e);
	}, 1000)
	callback();
}

var arr = ["a", "b", "c", "d", "e", "f", "g"];

(function next(i, len, callback) {
    if (i < len) {
        async(arr[i], function (value) {
            arr[i] = value;
            next(i + 1, len, callback);
        });
    } else {
        callback();
    }
}(0, arr.length, function () {
    // All array items have processed.
	console.log("all element handled");
}));
