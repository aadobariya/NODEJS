const mongoose = require('mongoose');

const  userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    age: {
        type: Number
    },
    isDelete:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('users', userSchema);