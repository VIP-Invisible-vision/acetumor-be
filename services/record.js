/*
* [service] record
* handles for record
*/

const record = require('../models/record')
const time = require('../utils/time')

exports.GetAll = async function(uid) {
  return await record.GetMany({ uid: uid}, {_id: 1, timestamp: 1, cat: 1})
}


exports.GetOne = async function(rid) {
  return await record.GetOne({ _id: rid })
}

exports.Delete = async function(rid) {
  return await record.Delete({ _id: rid })
}

exports.Upsert = async function(rid, feedback) {
  return await record.Upsert({ rid: rid }, { feedback: feedback })
}

exports.Insert = async function(uid, feedback, img, des, cat) {
  const timestamp = time.Timestamp()
  const doc = { uid: uid, timestamp: timestamp, image: img, cat: cat, des: des, feedback: '' }
  return await record.Insert(doc)
}

