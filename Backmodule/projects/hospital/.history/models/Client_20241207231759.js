const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    userNameInfo: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    problemDescription: {
        type: String,
        required: true,
        unique: true,
    },
})

const Client = mongoose.model('Client', )