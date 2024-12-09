const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

const Note = mongoose.model('Note', NoteSchema)

module.exports = Note