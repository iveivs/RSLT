const notes = []

function addNotes(title) {
    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(note)
}

function getNotes() {
    return n
}

module.exports = {
    addNotes, getNotes

}