require("babel-register")
require("babel-polyfill")

var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var cors = require('cors')

var db = require('./config/db')

var port = process.env.PORT || 9000
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB || db.url)
var mc = mongoose.connection
mc.on('error', console.error.bind(console, 'Mongodb connection error:'))
mc.once('open', () => {
  console.log(`Successfully connected to ${db.url}`)
})


app.use(bodyParser.json())
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}))
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(methodOverride('X-HTTP-Method-Override'))

app.use((req, res, next) => {
	console.log(`${new Date()} - ${req.method} to ${req.originalUrl}`)
	next()
})

app.use(cors())

require('./app/routes')(app)

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }

  console.log(err)

  res.status(500)
  res.json({ error: err.message, errors: err.errors })
}

app.use(errorHandler)

app.listen(port)
console.log('Magic happens on port ' + port)
exports = module.exports = app
