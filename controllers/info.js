/*
* [controllers] info
* handles for info 
*/

'use strict'

const info = require('../services/info')

exports.Get = async function(req, res) {
	const time = req.params.time
	if (!time) {
		res.status(400).send('Params error, time required')
		return
	}
	const articles = await info.Get(time)
	if (!articles) res.status(404).send('No articles found.')
	else res.send(articles)
}


exports.Post = async function(req, res) {
	const title   = req.body.title
	const content = req.body.content
	if (!title || !content) {
		res.status(400).send('Params error, title, content required')
		return
	}
	const result = await info.Insert(title, content)
	if (!result) res.status(403).send('Add article failed.')
	else res.send(result)
}