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


let person1 = {
    name: 'Mike',
    postsQuantity: 100,
}


let { someName, postsQuantity } = person1;
console.log('someName' someName);

// const somevar1 = {
//     ...person1,
//     n: person1.name
// }

// const arr = [2, 3, 0]
// const [one, two] = [...arr]
// console.log(one);

let options = {
    title: "Menu"
    ,
    width: 100,
    height: 200
};
let { title, width, height } = options;
console.log(title, width, height);