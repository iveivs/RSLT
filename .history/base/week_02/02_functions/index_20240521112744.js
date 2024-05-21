const createCounter = (initalValue = 0) => {
    return  (valueToAdd) => {
        return initalValue + valueToAdd 
    }
} 

const addFive = createCounter(5)
const addTen = 