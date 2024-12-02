

function addNote(title) {
    const note = {
        title,
        id: Date.now().toString()
    }
}
function getNotes() {}

module.exports = {
    addNote, getNotes
}