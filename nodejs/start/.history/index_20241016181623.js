const yargs = require('yargs')
const { addNotes, getNotes} = require('./notes.controller')
const chalk =

yargs.command({
    command: 'add',
    describe: 'add new note to list',
    builder: {
        title: {
            type: 'string',
            describe: 'Note title',
            demandOption: true,
        }
    },
    handler({ title }) {
        addNotes(title)
    }
})
yargs.command({
    command: 'list',
    describe: 'print all notes',
    async handler() {
        const notes = await getNotes()
        console.log('notes', notes);
    }
})

yargs.parse()