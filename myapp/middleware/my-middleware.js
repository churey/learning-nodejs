module.exports = function(options) {
	return function(req, res, next) {
		console.log('process with my-middleware');
		console.log('middleware initial paramster:' + options);
		next();
	}
}