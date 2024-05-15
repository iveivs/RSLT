let num = 123
let str = 'string'
let bln = true

num = '321'
str = 0
bln = null
// - - - - - - - - -

let ageOfPerson1 = 18;
let ageOfPerson2 = '20';

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';

let initialValue1;
let initialValue2 = 0;

var isJavaScriptProgrammer1 = true;
var isJavaScriptProgrammer2 = false;

let helloText1 = 'Hello!';
let helloText2 = 'Привет!';

// - - - - - - -

ageOfPerson2 = ageOfPerson1
console.log('ageOfPerson2:', ageOfPerson2, ',', 'typeof:', (typeof ageOfPerson2));

nameOfAnimal2 = nameOfAnimal1
console.log('nameOfAnimal2:', nameOfAnimal2, ',','typeof:', (typeof nameOfAnimal2));

// bestProgrammingLanguage2 = bestProgrammingLanguage1
// console.log('bestProgrammingLanguage2',bestProgrammingLanguage2 , ','(typeof bestProgrammingLanguage2));

initialValue2 = initialValue1
console.log('initialValue2', initialValue2, ','(typeof initialValue2));

console.log('Переменную с const переопределить нельзя');
console.log('isJavaScriptProgrammer1', isJavaScriptProgrammer2, ','(typeof isJavaScriptProgrammer2));
console.log('isJavaScriptProgrammer2', isJavaScriptProgrammer2, ','(typeof isJavaScriptProgrammer2));

helloText2 = helloText1
console.log('helloText2', helloText2, ','(typeof helloText2));