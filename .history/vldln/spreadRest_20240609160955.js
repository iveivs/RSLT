const glsn = ['ao', 'ou', 'ea', 'yo']
const sglsn = ['ks', 'th', 'nm', 'ls' ]

const glsnAndSglsn = [...glsn, ...sglsn]
// console.log(glsnAndSglsn);

const glsnAndSglsn2 = glsn.concat(sglsn)
// console.log(glsnAndSglsn2);

const smallLetters = {
    letter_a: 'aa', 
    letter_o: 'oo', 
    letter_e: 'ee', 
}
const bigLetters = {
    letter_A: 'AA', 
    letter_O: 'OO', 
    letter_E: 'EE', 
}

const allLetters = {...bigLetters, ...smallLetters}
// console.log(allLetters);


// Пример использования spread
const nums = [6, 15, 44, 23]
// console.log(Math.max(...nums));
// console.log(Math.max.apply(null, nums));

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]

// Rest 

function sum(a, b, ...rest){
    return a + b + rest.reduce((acc, i) => acc + i, 0) 
}
const numbers = [1, 2, 3, 4, 5]
// console.log(sum(...numbers));

const [a, b, ...other] = numbers
// console.log(a, b);

const user = {
    name: 'Qwe',
    age: 33,
    city: 'Asdf',
    country: 'SDAD'
}

const {name, age, ...adress} = user
// console.log(adress);

// Деструктуризация
function calcValues(a,b){
    return [
        a + b, 
        a - b,
        a * b,
    ]
}

const [sub, , mult ] = calcValues(33,11)
console.log(sub, mult);
//  так же при деструктизации можно создавать переменные со значением по умолчанию.

const persone = {
    name: 'Max',
    age: 33,
    adress: {
        country: 'Chili',
        city: 'Santiyago'
    }
}

const {neme: objName, objAge , work = 'driver', adress: {country}} = persone
// console.log(work); // driver


