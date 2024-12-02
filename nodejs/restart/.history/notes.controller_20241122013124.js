const notes = []

function addNote(title) {
    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(n)
}
function getNotes() {}

module.exports = {
    addNote, getNotes
}