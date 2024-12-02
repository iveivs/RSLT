const notes = []

function addNote(title) {
    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(note)
}
function getNotes() {}

module.exports = {
    addNote, getNotes
}