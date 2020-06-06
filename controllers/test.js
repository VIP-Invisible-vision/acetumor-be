/*
* [controllers] test
* handles for test 
*/

'use strict'

expors.Post = async function(req, res) {
	const image = req.body.img 
	const cat   = req.body.cat 
	if (!cat || !image) {
		res.status(400).send('Params Error, img, cat required')
		return
	}
	// send request to test api 
	// return res 
}