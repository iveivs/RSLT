const fs = require('fs')

async function addNotes(title) {
    const notes = require('./db.json')
    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(note)

    await fs.writeFile('./', JSON.stringify(notes))
}

function getNotes() {
    return require('./db.json')
}

module.exports = {
    addNotes, getNotes

}