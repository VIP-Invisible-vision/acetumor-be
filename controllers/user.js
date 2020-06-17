/*
* [controllers] user
* handles fpr user
*/

'use strict'

const user = require('../services/user')
const userInfo = require('../services/userInfo')

// user login
exports.Post = async function(req, res) {
  const code = req.body.code
  if (!code) {
    res.status(400).send('Params error, code required')
    return
  }
  const re = await user.Login(code)
  if (!re) {
    res.status(403).send('Login Failed.')
    return
  }
  res.send(re)
}


exports.GetInfo = async function(req, res) {
  const id = req.query.user 
  const info = await userInfo.Get(id)
  console.log(req.query)
  if (!info) 
    res.status(404).send('User not found.')
  else return res.send(info)
}


// update user info
exports.PostInfo = async function(req, res) {
  const id = req.query.user
  const email = req.body.email
  const phone = req.body.phone 
  console.log(req.body)
  if (!id || !email || !phone) {
    res.status(400).send('Params error, id, email, phone required')
    return
  }
  const re = userInfo.Upsert(id, email, phone)
  if (!re) {
    res.status(403).send('Update user information failed.')
  }
  else return res.send(re)
}
