console.log('tst');

const myNumber = 42


console.log(localStorage.getItem('number'));
// localStorage.setItem('number', myNumber)
localStorage.setItem('number', myNumber.toString())
console.log(localStorage.getItem('number'));
