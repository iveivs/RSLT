const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    clientName: String,
    required: true,
    unique: true,
})