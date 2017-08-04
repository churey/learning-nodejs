function f1(callback) {
	setTimeout(function() {
		// f1 main task
		console.log('do main job');
		callback();
	}, 1000);
}

function f2() {
	// do f2 job
	console.log('do callback');
}

f1(f2);
