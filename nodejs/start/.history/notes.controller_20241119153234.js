const fs = require('fs/promises')
const path = require('path')
const chalk = require('chalk')
const Note = require('./models/Note')

const notesPath = path.join(__dirname, 'db.json')

async function addNotes(title) {
    
    const notes = await getNotes()
    
    const note = {
        title,
        id: Date.now().toString()
    }
    notes.push(note)

    await fs.writeFile(notesPath, JSON.stringify(notes))
}

async function getNotes() {
    const notes = await Note.find() // через монгус
    return notes // через монгус
    // const notes = await fs.readFile(notesPath, {encoding: 'utf-8'}) // из файла
    // return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [] // из файла
}

async function removeNotyById(id) {
    const notes = await getNotes()
    const changedNotes = notes.filter(note => note.id !== id)
    await fs.writeFile(notesPath, JSON.stringify(changedNotes))
}

async function editNote(id, editedTitle) {
    const notes = await getNotes()
    const updatedNotes = notes.map(note => {
        if (note.id === id) {
            return { ...note, title: editedTitle }
        }
        return note
    })
    await fs.writeFile(notesPath, JSON.stringify(updatedNotes))
}

module.exports = {
    addNotes, removeNotyById, getNotes, editNote
}
