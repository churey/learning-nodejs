function sync(fn) {
	fn();
}

try {
	sync(null);
} catch (err) {
	console.log("Error: %s", err.message)
}
