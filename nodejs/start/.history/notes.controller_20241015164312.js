function addNotes(title) {
    const notes = require('./db.json')
    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(note)
}

function getNotes() {
    return notes
}

module.exports = {
    addNotes, getNotes

}