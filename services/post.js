/*
* [service] post
* handles for post
*/

'use strict'

const post = require('../models/post')

exports.GetAll = async function(thread, visibility) {
	return await post.Get({ 'thread': thread, 'visibility': { $in : visibility } })
}

exports.GetThreads = async function() {
	return await post.Threads('thread')
}

exports.Delete = async function(thread) {
	return await post.Delete({ 'thread': thread })
}

exports.DeleteOne = async function(pid) {
	return await post.Delete({ _id: pid })
}

exports.Insert =  async function (thread, title, owner, visibility, content, image) {
	const doc = { thread: thread, title: title, owner: owner, visibility: visibility, content: content, image: image }
	return await post.Insert(doc)
}

