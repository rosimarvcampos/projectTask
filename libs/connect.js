const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost/projectTask', { useNewUrlParser: true} )

module.exports = db
