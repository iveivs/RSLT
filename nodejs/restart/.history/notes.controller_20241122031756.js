const fs = require('fs/promises')
const path = require('path')

const notesPath = path.join(__dirname, 'db.json')
// console.log('notesPath', notesPath);

async function addNote(title) {
    const notes = await 
    // const notes = require('./db.json')
    
    // const note = {
    //     title,
    //     id: Date.now().toString()
    // }

    // notes.push(note)

    // await fs.writeFile(notesPath, JSON.stringify(notes))
}
function getNotes() {
    const notes = fs.readFile(notesPath, {encoding: 'utf-8'})
    return Array.isArray(JSON.stringify(notes)) ? JSON.stringify(notes) : []
}

module.exports = {
    addNote, getNotes
}