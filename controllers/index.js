/*
* [controllers]
* Start express listener
* Routers
*/


'use strict'

const express = require('express')

const moduleList = ['info', 'user', 'record', 'post', 'thread', 'test', 'reply']
let modules = {}

// load all modules
for (let m of moduleList) {
  modules[m] = require(`./${m}`)
}

const app = express()
app.use(express.json({ limit: '20mb'}))
app.disable('x-powered-by') // hide express identity
let api = express.Router() // router
app.use('/api', api) 
app.listen(3000, () => {
  console.log('# API server started!')
})

// APIs
// user
// admin login
api.post('/user', modules.user.Post)
// user login
api.post('/user/u', modules.user.LoginU)
// user register
api.post('/user/r', modules.user.RegisterU)
api.get('/user/info', modules.user.GetInfo)
api.post('/user/info', modules.user.PostInfo)

// forum
api.get('/forum/t', modules.thread.GetAll)
api.get('/forum/t/all', modules.thread.Get)
api.delete('/forum/t', modules.thread.Delete) // need auth(staff only)

api.get('/forum/p/:pid', modules.post.Get) // get post's replies
api.post('/forum/p', modules.post.Post)
api.delete('/forum/p', modules.post.Delete) // need auth

api.post('/forum/r', modules.reply.Post) 
api.delete('/forum/r', modules.reply.Delete) // need auth

// info
api.get('/info/:time', modules.info.Get)
api.post('/info', modules.info.Post)

// test
api.post('/test', modules.test.Post)
// record

api.get('/record/:id', modules.record.GetOne)
api.get('/record', modules.record.GetAll)
api.post('/record', modules.record.Post)
api.put('/record', modules.record.Put) // need auth(staff only)
api.delete('/record', modules.record.Delete) 
