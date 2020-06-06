/*
* [models] record
*/
'use strict'

const db = require('./index')
const collection = db().collection('record')


// insert a record
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

// get all records
exports.GetMany = async function(filter, opt = {}) {
	return await collection.find(filter, opt).toArray()
}

// get a user's info
exports.GetOne = async function (filter, opt = {}) {
  return await collection.findOne(filter, opt)
}

// delete a record
exports.Delete = async function (filter) {
  const res = await collection.deleteOne(filter)
  return res.result.ok
}

// upsert a record
exports.Upsert = async function (filter, update) {
  const res = await collection.updateOne(filter, update, { upsert: true })
  return res.result.ok
}