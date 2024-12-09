const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    clientName: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
})

const Client = mongoose.model('Client')