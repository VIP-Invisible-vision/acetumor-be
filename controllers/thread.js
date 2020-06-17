/*
* [controller] thread
* hanles for thread
*/

'use strict'
const userInfo = require('../services/userInfo')
const post = require('../services/post')

exports.GetAll = async function(req, res) {
	const thread = req.query.thread
	const uid    = req.query.user
	if (!thread || !uid) {
		res.status(400).send('Params error, thread, uid required')
		return
	}
	let visibility = []
	const role  = await userInfo.GetRole(uid)
	if (role.role === 'doctor' || role.role === 'admin') {
		visibility = ['public', 'staff', uid]
	} else if (role.role === 'patient') {
		visibility = ['public', uid]
	}
	const posts = await post.GetAll(thread, visibility)
	if (!posts) res.status(404).send('No post under the thread.')
	else res.send(posts)
}

// get all thread
exports.Get = async function(req, res) {
	const threads = await post.GetThreads()
	if (!threads) res.status(400).send('Get all threads failed.')
	else res.send(threads)
}


exports.Delete = async function(req, res) {
	const thread = req.params.thread
	const uid    = req.user
	if (!thread || !uid) {
		res.status(400).send('Params error, thread, uid required.')
		return
	}
	const role = await userInfo.GetRole(uid)
	if (role !== 'doctor' || role !== 'admin') {
		res.status(403).send('Forbidden')
		return 
	}

	const re =  await post.Delete(thread)
	if (!re) res.status(403).send('Delete the thread failed.')
	else res.send(re)
}