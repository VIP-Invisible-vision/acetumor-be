/*
* [app.js]
* Main entrance
* initialize
*/

'use strict'

const time = require('./utils/time')

const { Worker } = require('worker_threads')

async function main() {
  // initialize models
  let models = require('./models')
  // wait for models
  while (!models()) await time.Sleep(1000)
  console.log('# MongoDB ready (Main Thread)')
  // initialize controllers
  require('./controllers')
}

// start
main()