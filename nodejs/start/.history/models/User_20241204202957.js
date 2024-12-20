const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        uniq
    },
    password: {
        type: String,
        required: true
    },
})

const User = mongoose.model('User', UserSchema)

module.exports = User