
setTimeout(() => {
    console.log('setTimeout'); // callback
}, 0);
const promise = new Promise((resolve) => {
    console.log('Promise');
    resolve();
});
promise.then(() => {
    console.log('Promise resolve');
});
console.log('End');