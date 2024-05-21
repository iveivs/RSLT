const createCounter = (initalValue = 0) => {
    return  (valueToAdd) => {
        return valueToAdd 
    }
} 

const newFunc = createCounter(5)

console.log(newFunc());