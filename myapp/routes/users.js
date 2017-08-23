var express = require('express');
var router = express.Router();

var users = [
	{
		'id': 1,
		'name': 'Liam',
		'age': 1
	},
	{
		'id': 2,
		'name': 'Siyuan',
		'age': 2
	},
	{
		'id': 3,
		'name': 'Rox',
		'age': 3
	}
];

/* GET users listing. */
router.get('/users', function(req, res, next) {
	var data = users;
	var title = 'User List';
	res.render('users', {title: title, users: data});
});

router.get('/users/:id', function(req, res, next) {
	var queryId = req.params.id;
	if (queryId) {
		for (var index in users) {
			var user = users[index];
			if (queryId == user['id']) {
				res.render('users', {title: 'Get user info', users: [user]});
			}
		}
	}
	res.end('Can not find this user.');
});

router.post('/users', function() {
	// TODO
});

router.delete('/users/:id', function() {
	// TODO
});

router.put('/users/:id', function() {
	// TODO
});

module.exports = router;
