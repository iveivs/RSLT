const someNum = 5
const someData = new Promise((resolve, reject) => {
    if(someNum < 10){
        resolve('sucsess')
    } else {
        reject('Error')
    }
})
.then((result) => {
    console.log('result', result);
})
console.log(object);
// console.log('someData', someData);