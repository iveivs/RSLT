// Задание #1
function getName1(name) {
    return `Имя равно: ${name}`
}

const getName2 = function(name) {
    return `Имя равно: ${name}`
}

const getName3 = name => `Имя равно: ${name}`

console.log(getName1('test1'));
console.log(getName2('test2'));
console.log(getName3('test3'));

// Задание #2

function getSumOfNumbers(number, type) {
    let sum = 0
    if (isNaN(number) || arguments.length < 2) {
        return NaN;
    } else {
        for(let i = 0; i <= number; i++){
            switch (type) {
                case 'odd':
                    if (i % 2 !== 0) {
                        sum += i
                    }
                    return sum
                case 'even':
                    for (let i = 0; i <= number; i++) {
                        
                    }
                    return sum
                case '':
                    for (let i = 0; i <= number; i++) {
                        sum += i
                    }
                    return sum
            }
        }
    }
}
// old
// function getSumOfNumbers(number, type) {
//     let sum = 0
//     if (isNaN(number) || arguments.length < 2) {
//         return NaN;
//     } else {
//         switch (type) {
//             case 'odd':
//                 for (let i = 0; i <= number; i++) {
//                     if (i % 2 !== 0) {
//                         sum += i
//                     }
//                 }
//                 return sum
//             case 'even':
//                 for (let i = 0; i <= number; i++) {
//                     if (i % 2 === 0) {
//                         sum += i
//                     }
//                 }
//                 return sum
//             case '':
//                 for (let i = 0; i <= number; i++) {
//                     sum += i
//                 }
//                 return sum
//         }
//     }
// }



// console.log(getSumOfNumbers(10, 'even'));
// console.log(getSumOfNumbers(10, 'odd'));
// console.log(getSumOfNumbers(10, ''));
// console.log(getSumOfNumbers());

// Задание #3

function getDivisorsCount(number) {
    let divider = 0
    if (isNaN(number)) {
        return NaN
    } else if (number < 0 || !Number.isInteger(number)) {
        alert(`${number} должен быть целым числом и больше нуля!`)
    } else {
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                divider++
            }
        }
    }
    return divider
}

// console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
// console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
// console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
// console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10,
// console.log(getDivisorsCount(0.2))
// console.log(getDivisorsCount(-1))






















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