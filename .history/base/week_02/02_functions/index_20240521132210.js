function getName1(name) {
    return ``
}

const getName2 = function() {
    return
}






















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