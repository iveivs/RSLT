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
        addNotes(title)
    }
})
yargs.command({
    command: 'list',
    describe: 'print all notes',
    async handler() {
        const notes = await getNotes()
    }
})

yargs.parse()