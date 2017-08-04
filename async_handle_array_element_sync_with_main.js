// after all element be handled, the main callback will be executed
var async = function(e, callback) {
	console.log("async")
	setTimeout(function(){
		console.log("print: " + e);
		callback();
	}, 1000)
}

var arr = ["a", "b", "c", "d", "e"];

(function (i, len, count, maincallback) {
    for (; i < len; ++i) {
        (function (i) {
            async(arr[i], function (value) {
                arr[i] = value;
		console.log("count: " + count)
                if (++count === len) {
                    maincallback();
                }
            });
        }(i));
    }
}(0, arr.length, 0, function () {
    // All array items have processed.
	console.log("all element finished")
}));
