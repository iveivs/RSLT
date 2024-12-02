const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add new note to list',
    handler() {
        console.log('Add command');
    }
})
yargs.command({
    command: '',
    describe: 'Add new note to list',
    handler() {
        console.log('Add command');
    }
})