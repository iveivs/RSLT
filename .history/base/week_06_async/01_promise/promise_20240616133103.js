const developer = {
    name: 'Max',
    isJSDev: false
}

setTimeout(()=>{
    console.log('Test');
}, 2000)

const promise = new Promise((resolve, reject) => {
    if(developer.isJSDev){
        setTimeout(()=>{
            resolve('RESOLVE')
        }, 2000)
    } else {
        reject(`REJECT`)
    }
})

console.log(promise);

promise.then((successMessage) => {
    console.log('successMessage', successMessage);
})
.catch((errorMessage) => {
    console.log('errorMessage',errorMessage);
})
.f