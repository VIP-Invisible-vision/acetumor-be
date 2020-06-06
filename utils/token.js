/*
* [utils] Token
* Identity Management
*/

'use strict'

const SALT = String(Math.random())

const crypto = require('./crypto')
const time = require('./time')

// generate a new token
exports.Sign = function (id) {
  const timestamp = String(time.Timestamp())
  const signature = crypto.Hash(id + timestamp, SALT)
  return id + '.' + timestamp + '.' + signature
}

// verify a token
exports.Verify = function (token) {
  if (!token) return false
  const t = token.split('.')
  // check format
  if (!t[0] || !t[1] || !t[2]) return false
  // check signature
  if (crypto.Hash(t[0] + t[1], SALT) != t[2]) return false
  // valid
  return t[0]
}