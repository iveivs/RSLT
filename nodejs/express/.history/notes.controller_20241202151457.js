import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const notesPath = path.join(__dirname, 'db.json');

export async function saveNotes(notes) {
    await fs.writeFile(notesPath, JSON.stringify(notes))
}

export async function printNotes() {
    const notes = await getNotes()

    console.log(chalk.bgBlue('Here is the list of notes:'));
    notes.forEach(note => {
        console.log(chalk.bgWhite(note.id), chalk.blue(note.title));
    })
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

    await saveNotes(filtered)
}

export async function editNote(id, title) {
    const notes = await getNotes();

    const noteIndex = notes.findIndex(note => note.id === id); 

    if (noteIndex === -1) {
        throw new Error(`Note with id ${id} not found`); 
    }

    notes[noteIndex].title = title; 

    await saveNotes(notes); 
}
