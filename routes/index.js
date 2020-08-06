const routes = require('express').Router()
const pages =  require('./pages')
const model = require('./../model/task')()
const bodyParser = require('body-parser')
const express = require('express')
const { route } = require('./pages')


routes.use(bodyParser.urlencoded({extended: true}))

routes.get('/', async (req, res) => {
    (await model).find(null, (err, value)=> {
        res.render('home', {value})
    })
})

routes.post('/', async (req, res)=> {
    (await model).create({title: req.body.title, description: req.body.description})
    res.redirect('/')
})

routes.post('/edit', async (req, res) => {
    (await model).findById(req.body.id, (err, doc)=>{
        doc.title = req.body.title
        doc.description = req.body.description
        doc.save()
    })
    res.redirect('/')
})

routes.post('/del', async (req, res) => {
    (await model).findByIdAndDelete(req.body.id, (err, value) => {

    })
    res.redirect('/')
})

module.exports = routes
