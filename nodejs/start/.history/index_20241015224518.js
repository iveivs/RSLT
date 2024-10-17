const yargs = require('yargs')
const { addNotes, getNotes} = require('./notes.controller')

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
        console.log('Add command', title);
        addNotes(ешеду)
    }
})
yargs.command({
    command: 'list',
    describe: 'print all notes',
    handler() {
        const notes = getNotes()
        console.log('List command', notes);
    }
})

yargs.parse()