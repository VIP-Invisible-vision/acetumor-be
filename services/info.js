/*
* [services] info
* handles for info 
*/

'use strict'

const article = require('../models/article')
const time = require('../utils/time')

exports.Get = async function(duration) {
	const postTime = time.Timestamp() - duration; 
	return await article.GetMany({ timestamp: { $ge: postTime} })
}


exports.Insert = async function(title, content) {
	const timestamp = time.Timestamp()
	const doc = { title: title, content: content, timestamp: timestamp }
	return await article.Insert(doc)
}