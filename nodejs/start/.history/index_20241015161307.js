// require('./module')
// const person = {
//     name: 'Alex',
//     age: 123
// }
// function getName(p) {
//     return p.name
// }

// console.log(getName(person));
// console.log(process.argv);
const yargs = require('yargs')
const {} = require()

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
    }
})
yargs.command({
    command: 'list',
    describe: 'print all notes',
    handler() {
        console.log('List command');
    }
})

yargs.parse()