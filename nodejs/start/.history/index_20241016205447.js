const yargs = require('yargs')
// import yargs from 'yargs'
const { addNotes, printNotes, removeNotyById} = require('./notes.controller')


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
yargs.command({
    command: 'remove',
    describe: 'remove note',
    async handler({id}) {
        
    }
})

yargs.parse()