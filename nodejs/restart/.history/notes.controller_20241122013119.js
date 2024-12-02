const notes = []

function addNote(title) {
    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(title)
}
function getNotes() {}

module.exports = {
    addNote, getNotes
}