let db = require('../libs/connect')
let Schema = require('mongoose').Schema 

module.exports =  function(){
    let project = Schema({
        title: String,
        description: String,
        status: Boolean
    })
    return db.then(r => r.model('project', project))
}