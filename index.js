const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, './public/')))
const routes = require('./routes')
app.use(routes)

app.listen(4001, (err) => console.log(err, 'Runing'))