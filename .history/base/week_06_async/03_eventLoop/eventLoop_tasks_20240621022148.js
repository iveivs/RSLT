// Задание #1
// setTimeout(() => {
//     console.log('setTimeout'); // Callback queue
// }, 0);
// const promise = new Promise((resolve) => {
//     console.log('Promise'); // macrotask
//     resolve();
// });
// promise.then(() => {
//     console.log('Promise resolve'); // microtask
// });
// console.log('End'); // macrotask

// Promise
// End
// Promise resolve
// setTimeout

//  - - - - - - - - - - - - - - - - -

// Задание #2

// function runCode() {
//     console.log('before promise'); // macrotask
//     return new Promise((resolve) => { 
//         setTimeout(() => {
//             console.log('Zero Promise'); // Callback queue 2
//             resolve();
//         }, 0);
//     });
// }
// setTimeout(() => {
//     console.log('Zero'); // Callback queue 1
// }, 0);
// runCode().then(() => console.log('Zero Promise Invoked')); // macrotask -> microtask
// console.log('One'); // macrotask

// Мой вариант:
// before promise
// One
// Zero Promise Invoked
// Zero Promise
// Zero

// Правильный вариант
// before promise
// One
// Zero // в своём варианте я перепутал Stack queue и Callback queue, думал он должен выйти последним, а там ведь обычная "очередь в кассу " :))
// Zero Promise
// Zero Promise Invoked

//  - - - - - - - - - - - - - - - - -

// Задание #3

const getData = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((user) => {
            console.log('Success');
            callback(user);
        })
        .catch((error) => {
            console.log(error);
        });
}
getData(() => {
    console.log('user received'); // mAcrotask
    const promise = new Promise((resolve) => { 
        setTimeout(() => {  
            resolve('promise resolved'); // Callback queue 
        }, 500);
        console.log('in promise'); // mAcrotask
        setTimeout(() => {
            console.log('last set timeout'); // Callback queue 
        }, 400);
    });
    promise.then((result) => {
        console.log(result);
    });
});
console.log('End') // macrotask

// user received
// qqqqqqqqqqsxsssin promise


