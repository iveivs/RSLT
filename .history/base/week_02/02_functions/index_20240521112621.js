const createCounter = (ini) => {
    return  function() {
        return n * 10
    }
} 

const newFunc = createCounter(5)

console.log(newFunc());