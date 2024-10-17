const fs = require('fs/promises')
const path = require('path')

const notesPath = path.join(__dirname, 'db.json')

async function addNotes(title) {
    // const notes = require('./db.json')

    // const buffer =  await fs.readFile(notesPath)
    // const notes =  Buffer.from(buffer).toString('utf-8')

    
    

    // const note = {
    //     title,
    //     id: Date.now().toString()
    // }
    // notes.push(note)

    // await fs.writeFile(notesPath, JSON.stringify(notes))
}

addNotes('Test')

async function getNotes() {
    const notes = await fs.readFile(notesPath, {encoding: 'utf-8'})
    return Array.isArray(JSON)
}

module.exports = {
    addNotes, getNotes
}