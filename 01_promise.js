var step1 = function() {
	return new Promise(function(resolve, reject) {
		console.log("step1");
		resolve("success")
	})
}


var step2 = function(data) {
	setTimeout(function() {
		console.log("step2 input:" + data);
	}, 1000)
}
var step3 = function() {
	setTimeout(function() {
		console.log("step3");
	}, 1000)
}
var step4 = function() {
	setTimeout(function() {
		console.log("step4");
	}, 1000)
}
step1()
	.then(step2)
	.then(step3)
	.then(step4)
