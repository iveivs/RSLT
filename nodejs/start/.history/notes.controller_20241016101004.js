const fs = require('fs/promises')
const path = require('path')

const notesPath = path.join(__dirname, 'db.json')

async function addNotes(title) {
    // const notes = require('./db.json')
    const buffer =  await fs.readFile(notesPath)
    const notes =  Buffer.from(buffer).toString()
    console.log('notes', notes);

    // const note = {
    //     title,
    //     id: Date.now().toString()
    // }
    // notes.push(note)

    // await fs.writeFile(notesPath, JSON.stringify(notes))
}

addNotes('Test')

function getNotes() {
    return require('./db.json')
}

module.exports = {
    addNotes, getNotes
}