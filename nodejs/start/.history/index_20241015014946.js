require('./index')
const person = {
    name: 'Alex',
    age: 123
}
function getName(p) {
    return p.name
}

console.log(getName(person));