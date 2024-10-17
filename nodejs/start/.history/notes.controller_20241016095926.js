const fs = require('fs/promises')
const path = require('path')

async function addNotes(title) {
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
    addNotes, getNotes
}