/*
* [controllers] record
* handles for record
*/ 

'use strict'
const record = require('../services/record')
const userInfo = require('../services/userInfo')

exports.GetAll = async function(req, res) {
	const uid = req.uid 
	if (!uid) {
		res.status(400).send('Params error, uid required')
		return
	}
	const result = await record.GetAll(uid)
	if (!result) res.status(403).send('Failed to fetch data.')
	else res.send(result)
}


exports.GetOne = async function(req, res) {
	const rid = req.rid 
	if (!rid) {
		res.status(400).send('Params error, rid required')
		return
	}
	const result = await record.GetOne(rid)
	if (!result) res.status(403).send('Failed to fetch data.')
	else res.send(result)
}


exports.Post = async function(req, res) {
	const uid      = req.uid
	const feedback = req.feedback
	const img      = req.img
	const des      = req.des
	const cat      = req.cat

	if (!uid || !feedback || !img || !des || !cat) {
		res.status(400).send('Params error, uid, feedback, img, des, cat required')
		return
	}
	const result = await record.Insert(uid, feedback, img, des, cat)
	if (!result) res.status(403).send('Failed to add result.')
	else res.send(result)
}


exports.Put = async function(req, res) {
	const rid      = req.rid
	const uid      = req.uid
	const feedback = req.feedback
	if (!rid || !uid || !feedback) {
		res.status(400).send('Params error, rid, uid required')
		return
	}

	const role = await userInfo.GetRole(uid)
	if (role !== 'doctor') {
		res.status(403).send('Forbidden')
		return
	}
	const result = await record.Upsert(rid, feedback)
	if (!result) res.status(403).send('Add feedback failed.')
	else res.send(result)
}

exports.Delete = async function(req, res) {
	const rid = req.rid 
	if (!rid) {
		res.status(400).send('Params error, rid required')
		return
	}
	const result = await record.Delete(rid)
	if (!result) res.status(403).send('Delete failed.')
	else res.send(result)
}
