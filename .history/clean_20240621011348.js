console.log('start macrotask');
console.log('performing macrotask...');

setTimeout(() => { // Callback queue
    console.log('timeouted');
}, 0);

const promise = new Promise((resolve) => {
    console.log('Im in promise'); // выводится как macrotask
    // Этот текст выведется при вызове then
    resolve('result from promise');
});

promise.then((result) => { // Microtask queue
    console.log(result);
})

console.log('end macrotask');

// Вывод:
// start macrotask
// performing macrotask...

// end macrotask
// result from promise
// timeouted