/*
* [controllers] post
* handles for post
*/

'use strict'

const post = require('../services/post')
const reply = require('../services/reply')

exports.Get = async function(req, res) {
	const pid = req.params.pid
	if (!pid) {
		console.log(req.params)
		res.status(400).send('Params error, pid required')
		return
	}
	const replies = await reply.GetByPid(pid)
	if (!replies) res.status(404).send('No replies found.')
	else res.send(replies)
} 


exports.Post = async function(req, res) {
	const thread     = req.body.thread
	const title      = req.body.title
	const owner      = req.body.owner
	const visibility = req.body.visibility
	const content    = req.body.content
	const image      = req.body.img
	
	if (!thread || !title || !owner || !visibility || !content || !image || !(image instanceof Array)) {
		res.status(400).send('Params error, thread, title, owner, visibility, content, image(array) required')
		return
	}
	const result = await post.Insert(thread, title, owner, visibility, content, image)
	if (!result) res.status(403).send('Insertion failed.')
	else res.status(200).send('ok')
}


exports.Delete = async function(req, res) {
	const pid = req.params.pid
	const uid = req.uid
	if (!pid || !uid) {
		res.status(400).send('Params error, pid, uid required')
		return
	}
	// delete post
	const delPost = await post.DeleteOne(pid)
	if (!delPost) {
		res.status(403).send('Delete the post failed.')
		return 
	}
	const delReply = await reply.DeleteMany(pid)
	if (!delReply) res.status(403).send('Delete the post failed.')
	else res.send(delReply)
}
