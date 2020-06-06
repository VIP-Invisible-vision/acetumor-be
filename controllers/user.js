/*
* [controllers] user
* handles fpr user
*/

'use strict'

const user = require('../service/user')
const userInfo = require('../service/userInfo')

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
  const id = req.code 
  const info = await userInfo.Get(id)
  if (!info) {
    res.status(404).send('User not found.')
  }
  return res.send(info)
}


// update user info
exports.PostInfo = async function(req, res) {
  const id = req.body.code
  const email = req.body.email
  const phone = req.body.phone 
  if (!id || !email || !phone) {
    res.status(400).send('Params error, id, email, phone required')
  }
  const re = userInfo.Upsert(id, email, phone)
  if (!re) {
    res.status(403).send('Update user information failed.')
  }
  return res.send(re)
}
