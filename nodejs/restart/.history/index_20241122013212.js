const yargs = require('yargs')
const pckg = require('./package.json')
const { addNote, getNotes } = require('./notes.controller')

yargs.version(pckg.version)

yargs.command({
    command: 'add',
    describe: 'Add new note to list',
    builder: {
        title: {
            type: 'string',
            describe: 'note title',
            demandOption: true,
        }
    },
    handler( { title} ) {
        // console.log('Add command', title);
        addNote(title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Print all notes',
    handler() {
        // console.log('List command');
        const 
    }
})

yargs.parse()

