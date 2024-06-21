// Задание #1
setTimeout(() => {
    console.log('setTimeout'); // Callback queue
}, 0);
const promise = new Promise((resolve) => {
    console.log('Promise'); // macrotask
    resolve();
});
promise.then(() => {
    console.log('Promise resolve'); // microtask
});
console.log('End'); // macrotask

// Promise
// End
// Promise resolve
// setTimeout

//  - - - - - - - - - - - - - - - - -

// Задание #1



