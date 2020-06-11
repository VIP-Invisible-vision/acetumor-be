/*
* [models] Main Interface
* - connect MongoDB
*/

'use strict'

const config = require('../config')

const mongodb = require('mongodb')

const conf = config.db

let url = conf.string

const client = new mongodb.MongoClient(url, { useUnifiedTopology: true })

let DB

client.connect(err => {
  if (err) throw err
  DB = client.db(conf.db)
})

module.exports = () => {
  return DB
}