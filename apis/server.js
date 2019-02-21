const http = require('http')
const express = require('express')


require('mongoose').connect(process.env.uuri || 'mongodb://127.0.0.1:27017/test', {
  useNewUrlParser: true
})

const app = express()
const server = http.createServer(app)

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 5000

require('./middleware')(app)
require('./routes')(app)

server.listen(PORT, HOST, () => {
  console.log(`Listening on ${server.address().address}:${PORT}`)
})
