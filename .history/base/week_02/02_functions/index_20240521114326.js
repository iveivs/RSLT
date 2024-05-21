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

const createCounter = (initalValue = 0) => {
    let counter = initalValue
    return  (valueToAdd) => {
        counter += valueToAdd
        return counter
    }
} 

const addTwo = createCounter(2)
const result = addTwo(10)
result = addTwo(5)
console.log(result);