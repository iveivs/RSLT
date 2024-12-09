const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    userNameInfo: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    problemDescription: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;

