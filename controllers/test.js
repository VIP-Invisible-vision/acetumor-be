/*
* [controllers] test
* handles for test 
*/

'use strict'

exports.Post = async function(req, res) {
	console.log('test')
	const image = req.body.img 
	const cat   = req.body.cat 
	if (!cat || !image) {
		res.status(400).send('Params Error, img, cat required')
		return
	}
	console.log(cat)
	// send request to test api 
	// return res 
	res.status(200).send('ok')
}