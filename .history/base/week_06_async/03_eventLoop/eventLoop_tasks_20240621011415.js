
setTimeout(() => {
    console.log('setTimeout'); // Callback queue
}, 0);
const promise = new Promise((resolve) => {
    console.log('Promise');
    resolve();
});
promise.then(() => {
    console.log('Promise resolve');
});
console.log('End');