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

yargs.command({
    command: 'add',
    describe: 'add new note to list',
    handler() {

    }
})