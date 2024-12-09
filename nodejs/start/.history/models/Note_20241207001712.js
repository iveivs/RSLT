const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    owner: 
})

const Note = mongoose.model('Note', NoteSchema)

module.exports = Note