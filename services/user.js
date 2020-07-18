/*
* [services] user
* handles for user
*/

'use strict'

const user = require('../models/user')
const userInfo = require('../models/userInfo')
const token = require('../utils/token')
const config = require('../config')
const axios = require('axios')

async function oauth (code, platform) {
  // use axios here
  const params = {
    client_id: config.GITHUB.client_id,
    client_secret: config.GITHUB.client_secret,
    code: code,
  }
  const token = await axios
    .post(`${config.GITHUB.access_token_url}`, params)
    .then( resp => {
      let args = resp.data.split("&")
      let arg = args[0].split("=")
      let access_token = arg[1]
      return access_token
    })
    .catch(err => {
      console.log(err)
    })
  const url = "https://api.github.com/user?access_token=" + token
  const res = await axios
    .get(url)
    .then(resp => {
      return resp.data
    })
  return res
}

// Login !Unfinished
exports.Login = async function (code, platform) {
  // OAuth
  const profile = await oauth(code, platform)

  if (!profile) return false
  // Model I/O
  const u = { _id: profile.id }
  // Sign Token
  const t = token.Sign(u._id)
  const res = await user.Upsert(u, { $set: { auth: t }})
  if (res.upsertedCount > 0) {
    const doc = { role: 'doctor', email: profile.email, specilist: 'lung', phone: '' }
    userInfo.Upsert(u, { $set: doc })
  }
  if (!res) return false
  return {
    token: t,
    info: profile,
  }
}