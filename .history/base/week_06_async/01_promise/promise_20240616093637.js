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
            console.log('RESOLVE');
        }, 2000)
    } else {
        reject(`RE`)
    }
})