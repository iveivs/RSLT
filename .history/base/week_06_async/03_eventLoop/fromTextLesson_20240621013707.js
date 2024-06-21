// Вообще сам по себе Stack (стек) — это структура данных, элементы в которой действуют 
// по принципу “последним пришел - первым ушел” (LIFO: last in, first out).

// Стек можно сравнить с коробкой, в которую мы кладем вещи одну на другую. 
// Чтобы достать самую нижнюю вещь, которую мы положили первой, нам необходимо вытащить то, что находится над ней.

// Объявляем первую функцию
function funcOne() {
    funcTwo(); // Вызываем вторую функцию
    console.log('Hello everyone!');
}

// Объявляем вторую функцию
function funcTwo() {
    console.log('Hello World!');
    console.log('Hello JavaScript!');
}

funcOne(); // Вызываем первую функцию

// - - - - - - - - -

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
// Im in promise
// end macrotask
// result from promise
// timeouted