function async(fn, callback) {
	console.log(fn)
	setTimeout(function() {
		callback(fn());
	}, 0)
}

try {
	async(null, function(data) {
		// do something
	})
} catch (err) {
	console.log("Error: %s", err.message)
}
