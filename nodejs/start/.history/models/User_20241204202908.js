const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
})

const User = mongoose.model('User', UserSchema)

module.exports = User