const createCounter = (initalValue = 0) => {
    return  (valueToAdd) => {
        return initalValue + valueToAdd 
    }
} 

const addFive = createCounter(5)
const addTen = createCounter(10)
const result = addFive(10)