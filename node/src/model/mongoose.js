const mongoose = require('mongoose')
require('dotenv').config()
const mongodb_url = "mongodb://"+process.env.MONGO_HOST+":"+process.env.MONGO_PORT+"/"+process.env.MONGO_DB

mongoose.connect(mongodb_url,{
    useUnifiedTopology: true,
    useNewUrlParser: true
    },
    (err) => {
        if(!err){
            console.log('MongoDB connected Successfully')
        }
})
