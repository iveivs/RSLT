const fs = require('fs/promises')
const path = require('path')
const chalk = require('chalk')

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
    const notes = await fs.readFile(notesPath, {encoding: 'utf-8'})
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : []
}


async function printNotes() {
    const notes = await getNotes()

    console.log(chalk.bgBlue('Here is the list of notes: '));
    notes.forEach(note => {
        console.log(chalk.bgMagenta.inverse(note.id), chalk.bgMagenta.inverse(note.title))
    })
}


async function removeNotyById(id) {
    const notes = await getNotes()
    const changedNotes = notes.filter(note => note.id != id)
    console.log('Note was removed');
    await fs.writeFile(notesPath, JSON.stringify(changedNotes))
}

async function editNote(id, editedNote) {
    const notes = await getNotes()
    console.log('Notes from editNote');
}

module.exports = {
    addNotes, printNotes, removeNotyById, getNotes
}