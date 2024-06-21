
setTimeout(() => {
    console.log('setTimeout'); // Callback queue
}, 0);
const promise = new Promise((resolve) => {
    console.log('Promise'); // macrotask
    resolve();
});
promise.then(() => {
    console.log('Promise resolve'); macrotask
});
console.log('End');