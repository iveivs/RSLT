
setTimeout(() => {
    console.log('setTimeout'); // Callback queue
}, 0);
const promise = new Promise((resolve) => {
    console.log('Promise'); // macrotask
    resolve();
});
promise.then(() => {
    console.log('Promise resolve'); // mшcrotask
});
console.log('End');