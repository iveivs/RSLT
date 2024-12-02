// const fs = require('fs/promises')
// const path = require('path')

// const notesPath = path.join(__dirname, 'db.json')

// async function addNote(title) {
//     const notes = await getNotes()
    
//     const note = {
//         title,
//         id: Date.now().toString()
//     }

//     notes.push(note)

//     await fs.writeFile(notesPath, JSON.stringify(notes))
// }
// async function getNotes() {
//     const notes = await fs.readFile(notesPath, {encoding: 'utf-8'})
//     return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : []
// }

// module.exports = {
//     addNote, getNotes
// }

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Определяем __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const notesPath = path.join(__dirname, 'db.json');

export async function saveNotes() {
    await fs.
}

export async function addNote(title) {
    const notes = await getNotes();

    const note = {
        title,
        id: Date.now().toString(),
    };

    notes.push(note);

    await fs.writeFile(notesPath, JSON.stringify(notes));
}

export async function getNotes() {
    const notes = await fs.readFile(notesPath, { encoding: 'utf-8' });
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

export async function removeNotes(id){
    const notes = await getNotes()

    const filtered = notes.filter(note => note.id !== id)

    // saveNotes(filtered)
}
