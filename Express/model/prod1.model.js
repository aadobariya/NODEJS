const mongoose = require('mongoose');

const  prod1Schema = mongoose.Schema({
    
    title:{
            type: String
    },
    description:{
            type: String
    },
    price:{
            type: Number
    },
    category:[{
            type: String
    }],
    isDelete:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('prod1',prod1Schema);