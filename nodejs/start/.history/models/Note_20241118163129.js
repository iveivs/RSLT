const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

const Note = mongoose.Model('Note', NoteSchema)

module.exports = Note