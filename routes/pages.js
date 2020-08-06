const app = require('express').Router()
const pages = require('../controller/pages')

app.get('/', pages.inicio)
app.post('/', pages.save)
app.post('/edit', pages.edit)
app.post('/del', pages.del)

module.exports = app
