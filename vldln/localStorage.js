console.log('tst');

const myNumber = 42

localStorage.removeItem('number')
console.log(localStorage.getItem('number'));
// localStorage.setItem('number', myNumber)
localStorage.setItem('number', myNumber.toString())
console.log(localStorage.getItem('number'));
// localStorage.clear()

const someObject = {
    name: 'Max',
    age: 20
}

// localStorage.setItem('person', JSON.stringify(someObject))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'Alex'

console.log(person);