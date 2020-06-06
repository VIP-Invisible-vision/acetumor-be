/*
* [service] user
* hanles for user
*/

'use strict'

const userInfo = require('../models/userInfo')

// only get role of a user
exports.GetRole = async function(uid) {
	return await userInfo.Find({_id: uid}, { projection: { role: 1, _id: 0 }})
}

// get all info about a user
exports.Get = async function(uid) {
	return await userInfo.Find({_id: uid})
}

// update user data
exports.Upsert = async function(uid, email, phone) {
	const doc = { _id: uid, email: email, phone: phone }
  return await record.Upsert({ _id: doc._id }, { $set: doc })
}