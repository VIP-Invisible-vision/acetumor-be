/*
* [models] user
* hanles for user
*/

'use strict'

const db = require('./index')
const collection = db().collection('user')

exports.Get = async function(filter, opt = {}) {
	return await collection.find(filter, opt)
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

// get a user
exports.Find = async function (filter, opt = {}) {
  return await collection.findOne(filter, opt)
}

// delete a user
exports.Delete = async function (filter) {
  const res = await collection.deleteOne(filter)
  return res.result.ok
}

// upsert a user
exports.Upsert = async function (filter, update) {
  const res = await collection.updateOne(filter, update, { upsert: true })
  if (!res.result.ok) return false
  else return res
}