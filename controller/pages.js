// const model  = require("./../model/task")()
// const bodyParser = require('body-parser')
// const express = require('express')()
// express.use(bodyParser({extended: true}))

// const page1 =  async (req, res) => {
//     (await model).find(null, (err, value)=> {
//         res.render('home', {value})
//     })
// }

// const page2 =  async (req, res)=> {
//     (await model).create({title: req.body.title, description: req.body.description})
//     res.redirect('/')
// }

// module.exports = {page1, page2}