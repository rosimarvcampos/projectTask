const routes = require('express').Router()
const pages =  require('./pages')
const bodyParser = require('body-parser')
routes.use(bodyParser.urlencoded({extended: true}))

routes.use(pages)

module.exports = routes
