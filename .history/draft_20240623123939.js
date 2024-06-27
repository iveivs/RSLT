// const func = (cal) => {
//     console.log('FROM FUNC');
//     cal()
// }

// func(() => {
//     console.log("FROM ANONIM CALBCK");
// })
// console.log('LOG');

const somePromise = new Promise((res, rej) => {
    res()
    console.log('after res()');
    rej()
})

somePromise.then(toRes => {
    console.log('message from then to Res');
})

somePromise.catch()
console.log(somePromise);