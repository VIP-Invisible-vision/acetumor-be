/*
* [services] user
* handles for user
*/

'use strict'

const user = require('../models/user')
const token = require('../utils/token')

async function oauth (code, platform) {
  // use axios here
}

// Login !Unfinished
exports.Login = async function (code, platform) {
  // OAuth
  const profile = oauth(code, platform)
  if (!profile) return false
  // Model I/O
  const u = { _id: 'someId' }
  // Sign Token
  const t = token.Sign(u._id)
  return {
    token: t
  }
}