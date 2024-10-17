const yargs = require('yargs')
// import yargs from 'yargs'
const { addNotes, printNotes} = require('./notes.controller')
// import { addNotes, getNotes} from './notes.controller'

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
        const notes = await printNotes()
        console.log('notes', notes);
    }
})

yargs.parse()