const path = require('path')
const chalk = require('chalk')
const Note = require('./models/Note')

async function addNotes(title, owner) {
    await Note.create({ title: title, owner}) 
}

async function getNotes() {
    const notes = await Note.find() 
    return notes 
}

async function removeNotyById(id, owner) {
    const result = await Note.deleteOne({ _id: id, owner })

    if(result.matchedCount === 0) {
        throw new Error('No note to delete')
    }
}

async function editNote(id, editedTitle, owner) {
    const result = await Note.updateOne({ _id: id, owner}, {title: editedTitle} )

    // if(result.matchedCount === 0) {
    //     throw new Error('No note to edit')
    // }
}

module.exports = {
    addNotes, removeNotyById, getNotes, editNote
}

