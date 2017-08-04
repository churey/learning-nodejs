// this is a common method to handle exception when code asynced
function async(fn, callback) {
	setTimeout(function(){
		try {
			// normal exexuted assuming the err is null
			callback(null, fn());
		} catch (err) {
			callback(err);
		}
	}, 0)
}

async(null, function(err, data) {
	if (err) {
		console.log("Error: %s", err.message);
	} else {
		// do something
	}
})
