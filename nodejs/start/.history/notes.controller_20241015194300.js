const fs = require('fs/promises')

async function addNotes(title) {
    const notes = require('./db.json')
    const note = {
        title,
        id: Date.now().toString()
    }
    console.log('NOTE', note);
    notes.push(note)

    await fs.writeFile('./db.json', JSON.stringify(notes))
}

function getNotes() {
    return require('./db.json')
}

module.exports = {
    addNotes, getNotes
}