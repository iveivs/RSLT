const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        uni
    },
    password: {
        type: String,
        required: true
    },
})

const User = mongoose.model('User', UserSchema)

module.exports = User