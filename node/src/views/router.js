'use strict';
const router = require('express').Router()
const mongodb = require('./mongodb')
const mysql = require('./mysql')
const postgres = require('./postgres')

router.get('/mongodb/read',mongodb.read)
router.post('/mongodb/create',mongodb.create)
router.put('/mongodb/update/:id',mongodb.update)
router.delete('/mongodb/delete/:id',mongodb.del)

router.get('/mysql/read',mysql.read)
router.post('/mysql/create',mysql.create)
router.put('/mysql/update/:id',mysql.update)
router.delete('/mysql/delete/:id',mysql.del)

router.get('/postgres/read',postgres.read)
router.post('/postgres/create',postgres.create)
router.put('/postgres/update/:id',postgres.update)
router.delete('/postgres/delete/:id',postgres.del)

router.get('/',(req,res) => {
    res.json('Backend Working')
})

module.exports = router;