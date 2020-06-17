/*
* [service] user
* hanles for user
*/

'use strict'

const userInfo = require('../models/userInfo')

// only get role of a user
exports.GetRole = async function(uid) {
	return await userInfo.Find({_id: parseInt(uid)}, { projection: { role: 1, _id: 0 }})
}

// get all info about a user
exports.Get = async function(uid) {
	return await userInfo.Find({'_id': parseInt(uid)})
}

// update user data
exports.Upsert = async function(uid, email, phone) {
	const doc = { id: parseInt(uid), email: email, phone: phone }
	console.log(doc)
  return await userInfo.Upsert({ _id: doc.id }, { $set: doc })
}