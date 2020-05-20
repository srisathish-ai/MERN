const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DB
})

connection.connect((err) => {
    if(!err){
        console.log('Mysql Connected Successfully ')
    } else {
        console.log(`Error : ${err}`)
    }
})


module.exports = {
    connection
}