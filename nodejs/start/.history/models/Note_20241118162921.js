const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    title: {
        type: String,
    }
})