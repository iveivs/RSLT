const notes = []

function addNotes() {
    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(note)
}

function getNotes() {}

module.exports = {
    addNotes, getNotes

}