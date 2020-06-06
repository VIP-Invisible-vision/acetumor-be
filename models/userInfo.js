/*
* [models] userInfo
* hanles for user information
*/

'use strict'

const db = require('./index')
const collection = db().collection('userInfo')

exports.Get = async function(filter, opt = {}) {
	return await collection.find(filter, opt).toArray()
}

exports.Insert = async function (doc) {
  let res
  try {
    res = await collection.insertOne(doc)
  } catch (err) {
    console.log('! ' + err.errmsg)
    return 0
  }
  return res.result.ok // 1 for success
}

// get a user's info
exports.Find = async function (filter, opt = {}) {
  return await collection.findOne(filter, opt)
}

// delete a user's info
exports.Delete = async function (filter) {
  const res = await collection.deleteOne(filter)
  return res.result.ok
}

// upsert a user's info
exports.Upsert = async function (filter, update) {
  const res = await collection.updateOne(filter, update, { upsert: true })
  return res.result.ok
}