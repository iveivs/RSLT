const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    login : {
        type: String,
        required: true,
    },
})