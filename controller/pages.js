const model  = require("./../model/task")()
const route = require('express').Router()
const app = require('express')() 

const inicio = async (req, res) => {
   (await model).find(null, (err, value)=> {
       res.render('home', {value})
   })
}

const edit = async (req, res) => {
   (await model).findById(req.body.id, (err, doc)=>{
       doc.title = req.body.title
       doc.description = req.body.description
       doc.save()
   })
   res.redirect('/')
}

const save =  async (req, res)=> {
    (await model).create({title: req.body.title, description: req.body.description})
    res.redirect('/')
}

const del =  async (req, res) => {
    (await model).findByIdAndDelete(req.body.id, (err, value) => {

    })
    res.redirect('/')
}

module.exports = {edit, inicio, save, del}