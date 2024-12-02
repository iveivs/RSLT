const yargs = require('yargs')
const pckg = require('./')

yargs.command({
    command: 'add',
    describe: 'Add new note to list',
    handler() {
        console.log('Add command');
    }
})
yargs.command({
    command: 'list',
    describe: 'Print all notes',
    handler() {
        console.log('List command');
    }
})

yargs.parse()