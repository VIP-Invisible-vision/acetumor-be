/*
* [controllers] reply
* hanles for reply
*/

'use strict'

const reply = require('../services/reply')

exports.Post = async function(req, res) {
	const pid = req.body.pid
	const rid = req.body.rid
	const uid = req.body.uid
	if (!pid || !rid || !uid) {
		res.status(400).send('Params error, pid, rid, uid required.')
		return
	}
	const result = await reply.Post(pid, rid, uid)
	if (!result) res.status(403).send('Add reply failed.')
	else res.status(200).send('ok')
} 


exports.Delete = async function(req, res) {
	const rid = req.body.rid
	if (!rid) {
		res.status(400).send('Params error, rid required.')
		return
	}
	const result = await reply.Delete(rid)
	if (!result) res.status(403).send('Delete reply failed.')
	else res.status(200).send('ok')
} 

