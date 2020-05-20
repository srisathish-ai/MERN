const {Pool} = require('pg')
require('dotenv').config()

const client = new Pool({
    host : process.env.PG_HOST,
    port : process.env.PG_PORT,
    user : process.env.PG_USER,
    password : process.env.PG_PASSWORD,
    database : process.env.PG_DB,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
})

client.connect((err, client) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
      }
    else {
        console.log('PG Connected Successfully')
    }
})
const read = async(req,res) => {
    client.query('select * from newdata')
        .then(result => res.status(200).json(result.rows))
        .catch(err => res.status(400).json(err))
}

const create = async(req,res) => {
    var sql = `INSERT into newdata(name,age,city) VALUES ('${req.body.Name}','${req.body.Age}','${req.body.City}')`
    console.log(sql)
    client.query(sql)
    .then(() => res.status(200).json(`New Data Added`))
    .catch(err => res.status(400).json(err))
}

const update = async(req,res) => {
    var sql = `UPDATE newdata set name = '${req.body.Name}',age = '${req.body.Age}',city = '${req.body.City}' WHERE id = ${req.params.id}`
    await client.query(sql)
        .then(() => res.status(200).json(`Date Updated`))
        .catch(err => res.status(400).json(err))
}

const del = async(req,res) => {
    var sql = `DELETE from newdata WHERE id = ${req.params.id}`
    await client.query(sql)
        .then(() => res.status(200).json(`Date Deleted`))
        .catch(err => res.status(400).json(err))
}

module.exports ={
    read,
    create,
    update,
    del
}