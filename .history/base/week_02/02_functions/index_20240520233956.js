const createCounter = (n) => {
    return  function() {
        return n * 10
    }
} 

const newFunc = createCounter