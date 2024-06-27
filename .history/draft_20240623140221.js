// const func = (cal) => {
//     console.log('FROM FUNC');
//     cal()
// }

// func(() => {
//     console.log("FROM ANONIM CALBCK");
// })
// console.log('LOG');

// console.log('START');
// const somePromise = new Promise((res, rej) => {
//     const someArr = ['Im', 'value', 'from resolve']
//     res(someArr)
//     console.log('after res()');
//     rej()
// })

// somePromise.then(fromRes => {
//     console.log('message from then to Res');
//     console.log('fromRes', fromRes);
// })
//     .catch(err => {
//         console.log('ERROR', err);
//     })
// console.log('END');
// console.log('somePromise:', somePromise);


const person1 = {
    name: 'Mike',
    info: {
        country: 'Spain',
        age: 23,
    },
    postsQuantity: 100,
}

const somevar1 = {
    ...person1,
    n: person1.name
}
console.log(somevar1);
let user = {};
// const arr = [2, 3, 0]
// const [one, two] = [...arr]
// console.log(one);