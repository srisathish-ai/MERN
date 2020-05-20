const mysql = require('../model/mysql')

const read = async(req, res) => {
    mysql.connection.query('SELECT * from NewTable', (err, result, field) => {
        if (!err){
            res.status(200).json(result)
        } else {
            res.status(400).json(err)
        }
    })
}

const create = async(req, res) => {
    var sql = `INSERT INTO NewTable(Name,Age) VALUES ?`
    var values = [
        [req.body.Name,req.body.Age]
    ];
    await mysql.connection.query(sql,[values],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).json(result.affectedRows)
        }
    })
}

const update = async(req, res) => {
    var sql = `UPDATE NewTable SET ? WHERE id = ${req.params.id}`
    var values = {
        Name : req.body.Name, Age :req.body.Age
    }
    console.log(sql)
    await mysql.connection.query(sql,values,(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).json(result.affectedRows)
        }
    })
}

const del = async(req, res) => {
    var sql = `DELETE from NewTable WHERE id = ${req.params.id}`
    console.log(sql)
    await mysql.connection.query(sql,(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).json(result.affectedRows)
        }
    })
}


module.exports = {
    read,
    create,
    update,
    del
}
