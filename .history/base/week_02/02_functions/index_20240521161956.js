// Задание #1
// function getName1(name) {
//     return `Имя равно: ${name}`
// }

// const getName2 = function(name) {
//     return `Имя равно: ${name}`
// }

// const getName3 = name => `Имя равно: ${name}`

// console.log(getName1('test1'));
// console.log(getName2('test2'));
// console.log(getName3('test3'));

// Задание #2

function getSumOfNumbers(number, type) {
    let sum = 0
    if (isNaN(number) || argumentslength < 2) {
        return NaN;
    } else {
        switch (type) {
            case 'odd':
                for (let i = 0; i <= 10; i++) {
                    if (i % 2 !== 0) {
                        sum += i
                    }
                }
                return sum
            case 'even':
                for (let i = 0; i <= 10; i++) {
                    if (i % 2 === 0) {
                        sum += i
                    }
                }
                return sum
            case '':
                for (let i = 0; i <= 10; i++) {
                    sum += i
                }
                return sum

        }
    }
    console.log('test');
}

console.log(getSumOfNumbers(10, 'even'));
console.log(getSumOfNumbers(10, 'odd'));
console.log(getSumOfNumbers(10, ''));
console.log(getSumOfNumbers(5));
// (!number && number !== 0) || i






















// Пример с урока(замыкания)
// const createCounter = (initalValue = 0) => {
//     return  (valueToAdd) => {
//         return initalValue + valueToAdd 
//     }
// } 

// const addFive = createCounter(5)
// const addTen = createCounter(10)
// const result = addFive(10)
// console.log(result);
// - - - - - - - - - - - - - -

// Второй пример

// const createCounter = (initalValue = 0) => {
//     let counter = initalValue
//     return  (valueToAdd) => {
//         counter += valueToAdd
//         return counter
//     }
// } 

// const addTwo = createCounter(2)
// let result = addTwo(10) // 12
// result = addTwo(5) // 17
// console.log(result);
// - - - - - - - - - - - - - -

// пример с урока(текстовый)
// function outer() {
//     let x = 1;

//     function inner() {
//         console.log(x);
//         x++;
//     }

//     return inner;
// }

// const func = outer();
// func(); // Выведет в консоль: 1
// func(); // Выведет в консоль: 2
// - - - - - - - - - - - - - -