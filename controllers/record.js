/*
* [controllers] record
* handles for record
*/ 

'use strict'
const record = require('../services/record')
const userInfo = require('../services/userInfo')

exports.GetAll = async function(req, res) {
	const uid = req.query.user 
	if (!uid) {
		res.status(400).send('Params error, uid required')
		return
	}
	const result = await record.GetAll(uid)
	if (!result) res.status(403).send('Failed to fetch data.')
	else res.send(result)
}


exports.GetOne = async function(req, res) {
	const rid = req.params.id 
	console.log(req.params)
	if (!rid) {
		res.status(400).send('Params error, rid required')
		return
	}
	const result = await record.GetOne(rid)
	if (!result) res.status(403).send('Failed to fetch data.')
	else res.send(result)
}


exports.Post = async function(req, res) {
	const uid      = req.query.user
	const feedback = req.body.feedback
	const img      = req.body.img
	const des      = req.body.des
	const cat      = req.body.cat
	if (!uid || !feedback || !img || !des || !cat) {
		res.status(400).send('Params error, uid, feedback, img, des, cat required')
		return
	}
	const result = await record.Insert(uid, feedback, img, des, cat)
	if (!result) res.status(403).send('Failed to add result.')
	else res.status(200).send('ok')
}


exports.Put = async function(req, res) {
	const rid      = req.body.rid
	const uid      = req.query.user
	const feedback = req.body.feedback
	if (!rid || !uid || !feedback) {
		res.status(400).send('Params error, rid, uid required')
		return
	}

	const role = await userInfo.GetRole(uid)
	if (role.role !== 'doctor') {
		console.log(role)
		res.status(403).send('Forbidden')
		return
	}
	const result = await record.Upsert(rid, feedback)
	if (!result) res.status(403).send('Add feedback failed.')
	else res.status(200).send('ok')
}

exports.Delete = async function(req, res) {
	const rid = req.body.rid 
	if (!rid) {
		res.status(400).send('Params error, rid required')
		return
	}
	const result = await record.Delete(rid)
	if (!result) res.status(403).send('Delete failed.')
	else res.status(200).send('ok')
}
