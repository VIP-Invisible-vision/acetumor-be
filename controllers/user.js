/*
* [controllers] user
* handles fpr user
*/

'use strict'

const user = require('../services/user')
const userInfo = require('../services/userInfo')

// admin login
exports.Post = async function(req, res) {
  const code = req.body.code
  const platform = req.body.platform
  if (!code || !platform) {
    res.status(400).send('Params error, code, platform required')
    return
  }
  const re = await user.Login(code)
  if (!re) {
    res.status(403).send('Login Failed.')
    return
  }
  res.status(200).send(re)
}

// user login
exports.LoginU = async function(req, res) {
  const username = req.body.username
  const password = req.body.password
  console.log(req.body)
  if (!username || !password) {
    res.status(400).send('Params error, username, password required')
  }
  const re = await user.LoginU(username, password)
  if (!re) {
    res.status(403).send('Incorrect username or password')
    return
  }
  res.status(200).send('ok')
}

// user register
exports.RegisterU = async function(req, res) {
  const username = req.body.username
  const password = req.body.password
  if (!username || !password) {
    res.status(400).send('Params error, username, password required')
  }
  const re = await user.RegisterU(username, password)
  if (re == -1) {
    res.status(403).send('Username has already been taken')
    return
  } else if (!re) {
    res.status(500).send('Registeration failed please contact our staff.')
    return
  }
  res.status(200).send('ok')
}

exports.GetInfo = async function(req, res) {
  const id = req.query.user 
  const info = await userInfo.Get(id)
  console.log(info)
  if (!info) 
    res.status(404).send('User not found.')
  else res.status(200).send(info)
}


// update user info
exports.PostInfo = async function(req, res) {
  const id = req.query.user
  const email = req.body.email
  const phone = req.body.phone 
  if (!id || !email || !phone) {
    res.status(400).send('Params error, id, email, phone required')
    return
  }
  const re = userInfo.Upsert(id, email, phone)
  if (!re) {
    res.status(403).send('Update user information failed.')
  }
  else res.status(200).send('ok')
}
