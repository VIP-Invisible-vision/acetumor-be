/*
* [controllers] test
* send test message
* controllers for test
*/

const axios = require('axios')

exports.Post = async function(req, res) {
	const cat = req.body.cat
	const img = req.body.img

	if (!cat || !img) {
		res.status(403).send('Params error, require cat and img')
	}
	// resend to another backend

	console.log(img)
	res.status(200).send('ok')
}