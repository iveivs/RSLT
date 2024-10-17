const notes = []

function addNotes(title) {
    const notes = re
    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(note)
}

function getNotes() {
    return notes
}

module.exports = {
    addNotes, getNotes

}