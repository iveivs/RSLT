const fs = require('fs/promises')
const path = require('path')

const notesPa

async function addNote(title) {
    const notes = require('./db.json')
    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(note)

    await fs.writeFile('./db.json', JSON.stringify(notes))
}
function getNotes() {
    return require('./db.json')
}

module.exports = {
    addNote, getNotes
}