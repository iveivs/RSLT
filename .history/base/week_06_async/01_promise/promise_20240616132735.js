const developer = {
    name: 'Max',
    isJSDev: true
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
.catch((error) => {
    
})