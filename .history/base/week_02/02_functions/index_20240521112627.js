const createCounter = (initalValue = 0) => {
    return  function() {
        return n * 10
    }
} 

const newFunc = createCounter(5)

console.log(newFunc());