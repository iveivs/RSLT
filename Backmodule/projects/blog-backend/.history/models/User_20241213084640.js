const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    login : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
    role : {
        type: Number
    },
})