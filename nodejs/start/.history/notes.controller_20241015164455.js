const fs = require('fs')

function addNotes(title) {
    const notes = require('./db.json')
    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(note)
}

function getNotes() {
    return require('./db.json')
}

module.exports = {
    addNotes, getNotes

}