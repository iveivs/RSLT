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
    clientName: {
        type: String,
        required: true,
        unique: true,
    },
})