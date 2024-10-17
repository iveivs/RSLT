const fs = require('fs/promises')
const path = require('path')
const chalk = require('chalk')

const notesPath = path.join(__dirname, 'db.json')

async function addNotes(title) {
    // const notes = require('./db.json')

    // const buffer =  await fs.readFile(notesPath)
    // const notes =  Buffer.from(buffer).toString('utf-8')

    const notes = await getNotes()
    
    const note = {
        title,
        id: Date.now().toString()
    }
    notes.push(note)

    await fs.writeFile(notesPath, JSON.stringify(notes))
    console.log(chalk.green.inverse('Note was added'));
}


async function getNotes() {
    const notes = await fs.readFile(notesPath, {encoding: 'utf-8'})
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : []
}

module.exports = {
    addNotes, getNotes
}