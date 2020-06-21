/*
* [models] post
*/

'use strict'

const db = require('./index')
const collection = db().collection('post')

exports.Insert =  async function(doc){
	let res
	try {
		res = await collection.insertOne(doc)
	} catch (err) {
		console.log('! ' + err.errmsg)
		return 0
	}
	return res.result.ok // 1 for success

}
exports.Get = async function(filter, opt = {}) {
	return await collection.find(filter, opt).toArray()
}

exports.Threads = async function(filter) {
	return await collection.distinct(filter)
}

exports.Delete = async function(filter) {
	return await collection.deleteMany(filter)
}


