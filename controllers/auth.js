/*
* [controllers] auth
* middleware user auth
*/
'use strict'

const token = require('../utils/token')

exports.UserAuth = async function (req, res, next) {
  const t = req.get('token')
  const uid = token.Verify(t)
  if (!uid) {
    res.status(403).send('Forbidden')
    return
  }
  req.user = uid
  next()
}