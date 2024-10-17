const fs = require('fs/promises')
const path = require('path')
const chalk = require('chalk')
// import fs from 'fs/promises'
// import path from 'path'
// import chalk from 'chalk'


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
    // console.log(chalk.bgBlue('Note was added'));
}


async function getNotes() {
    const notes = await fs.readFile(notesPath, {encoding: 'utf-8'})
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : []
}

async function printNotes() {
    const notes = await getNotes()

    console.log(chalk.bgBlue('Here is the list of notes: '));
    notes.forEach(note => {
        console.log(chalk.bgMagenta.inverse(note.title))
    })
}

module.exports = {
    addNotes, printNotes
}