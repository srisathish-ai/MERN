const postgres = require('../model/postgres')

const read = async(req, res) => {
    await postgres.query(`Select * from NewTable`)
        .then(() => res.status(200).json(res))
        .catch(err => res.status(400).json(err))
}

const create = async(req,res) => {
    var sql = `INSERT into NewTable(Name,Age,City)
        VALUES (
            ${req.body.Name},
            ${req.body.Age},
            ${req.body.City})`
    await postgres.query(sql)
        .then(() => res.status(200).json(`New Data Added`))
        .catch(err => res.status(400).json(err))
}

const update = async(req,res) => {
    var sql = `UPDATE NewTable 
        set Name = 
            ${req.body.Name},
            ${req.body.Age},
            ${req.body.City}
        WHERE id = ${req.params.id}`
    await postgres.query(sql)
        .then(() => res.status(200).json(`Date Updated`))
        .catch(err => res.status(400).json(err))
}
const del = async(req,res) => {
    var sql = `DELETE from NewTable WHERE id = ${req.params.id}`
    await postgres.query(sql)
        .then(() => res.status(200).json(`Date Deleted`))
        .catch(err => res.status(400).json(err))
}
module.exports ={
    read,
    create,
    update,
    del
}