/*
* [models] reply
*/

'use strict'

const db = require('./index')
const collection = db().collection('reply')


// insert a reply
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

// get all replies
exports.GetMany = async function(filter, opt = {}) {
	return await collection.find(filter, opt).toArray()
}

// delete a reply
exports.Delete = async function (filter) {
  const res = await collection.deleteMany(filter)
  return res.result.ok
}

// upsert a reply
exports.Upsert = async function (filter, update) {
  const res = await collection.updateOne(filter, update, { upsert: true })
  return res.result.ok
}