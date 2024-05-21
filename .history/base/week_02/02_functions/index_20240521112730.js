const createCounter = (initalValue = 0) => {
    return  (valueToAdd) => {
        return initalValue + valueToAdd 
    }
} 

const addFi = createCounter(5)

console.log(newFunc());