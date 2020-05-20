const mysql = require('./node_modules/mysql')
require('./node_modules/dotenv').config()

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