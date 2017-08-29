var step1 = function() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log('step1 timeout'); 
			resolve("success");
		}, 5000);
		// console.log("step1");
		// resolve("success")
	})
}


var step2 = function(data) {
	console.log('step2 start');
	return new Promise(function(resolve, reject){
		setTimeout(function() {
			console.log("step2 input:" + data);
			resolve("success");
		}, 2000);
	})
}
var step3 = function() {
	console.log('step3 start');
	setTimeout(function() {
		console.log("step3");
	}, 1000)
}
var step4 = function() {
	console.log('step4 start');
	setTimeout(function() {
		console.log("step4");
	}, 1000)
}
//step1()
//	.then(step2)
//	.then(step3)
//	.then(step4)
step1().then(step2);
//Promise.all([step2("hello step2 promise")]).then(step3);
