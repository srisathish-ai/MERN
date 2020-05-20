const schema = require('mongoose').Schema;
const model = require('mongoose').model;

const mongoschema = new schema({
    Name : {
        required : true,
        type: String
    },
    Age : {
        type: Number,
        required : true
    },
    City : {
        type: String,
        required : true
    },
    CreatedOn : {
        type : Date,
        default: Date.now
    }
})

module.exports = model('dbset',mongoschema)