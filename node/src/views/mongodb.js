const schema = require('../model/mongoschema')
const mongoose = require('../model/mongoose')

const read = async(req, res) => {
    await schema.find()
        .then(article => res.status(200).json(article))
        .catch(err => res.status(400).json(`Error : ${err}`))
}

const create = async(req, res) => {
    var createArticles = new schema({
        Name : req.body.Name,
        Age : req.body.Age,
        City : req.body.City
    })
    await createArticles.save()
        .then(() => res.status(200).json('New Data Created'))
        .catch(err => res.status(400).json(`Error : ${err}`))
}

const update = async(req, res) => {
    await schema.findById(req.params.id)
        .then(data => {
            data.Name = req.body.Name;
            data.Age = req.body.Age;
            data.City = req.body.City

            data.save()
                .then(() => res.status(200).json(`Data Modified`))
                .catch(err => res.status(400).json(`Error : ${err}`))
        })
        .catch(err => res.status(400).json(`Error : ${err}`))
}

const del = async(req, res) => {
    await schema.findById(req.params.id)
        .then(data => 
            data.remove()
                .then(() => res.status(200).json(`Data Deleted`))
                .catch(err => res.status(400).json(`Error : ${err}`))
            )
        .catch(err => res.status(400).json(`Error : ${err}`))
}

module.exports = {
    read,
    create,
    update,
    del
}