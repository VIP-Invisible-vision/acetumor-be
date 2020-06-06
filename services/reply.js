/*
* [services] reply
* handles for reply
*/

'use strict'

const reply = require('../models/reply')
const time = require('../utils/time')

exports.GetByPid = async function(pid) {
	return await reply.GetMany({ pid: pid })
}

exports.DeleteMany = async function(pid) {
	return await reply.Delete({ pid: pid })
}

exports.Delete = async function(rid) {
	return await reply.Delete({ _id: rid })
}

exports.Post = async function(pid, rid, uid) {
	const timestamp = time.Timestamp()
	const doc = { pid: pid, replyTo: rid, owner: uid, timestamp: timestamp }
	return reply.Insert(doc)
}