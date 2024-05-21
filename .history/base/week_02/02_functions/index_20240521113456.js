



const createCounter = (initalValue = 0) => {
    let counter = initalValue
    return  (valueToAdd) => {
        counter
        return initalValue + valueToAdd 
    }
} 

const addFive = createCounter(5)
const addTen = createCounter(10)
const result = addFive(10)
console.log(result);