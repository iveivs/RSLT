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

function runCode() {
    console.log('before promise'); // macrotask
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Zero Promise'); // Callback queue 2
            resolve();
        }, 0);
    });
}
setTimeout(() => {
    console.log('Zero'); // Callback queue 1
}, 0);
runCode().then(() => console.log('Zero Promise Invoked')); // macrotask -> microtask
console.log('One'); // macrotask

// Мой вариант:
// before promise
// One
// Zero Promise Invoked
// Zero Promise
// Zero

// Правильный вариант
// before promise
// One
// Zero // так и не понял почему выводтся сначала это ? Ведь это Callback queue, и он туда "зашёл"
// Zero Promise
// Zero Promise Invoked



