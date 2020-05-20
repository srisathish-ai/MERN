const express = require('express'); 
const morgan = require('morgan')
const cors = require('cors')
const router = require('./views/router')
var app = express()
require('dotenv').config()
const port = process.env.APP_PORT
const host = process.env.APP_HOST

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/api',router)

app.listen(port,host,() => {
    console.log(`Server start on ${host}:${port}`)
})