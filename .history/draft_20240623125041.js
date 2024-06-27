// const func = (cal) => {
//     console.log('FROM FUNC');
//     cal()
// }

// func(() => {
//     console.log("FROM ANONIM CALBCK");
// })
// console.log('LOG');

console.log('START');
const somePromise = new Promise((res, rej) => {
    res('Im value ')
    console.log('after res()');
    rej()
})

somePromise.then(toRes => {
    console.log('message from then to Res');
})
.catch(err => {
    console.log('ERROR', err);
})
console.log('END');
console.log(somePromise);