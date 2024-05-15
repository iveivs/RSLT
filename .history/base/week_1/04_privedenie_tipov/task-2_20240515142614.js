console.log(Number('10'), typeof Number('10')); // явное
//1
console.log(+'50'); // неявное
console.log(Number('50'), typeof Number('50')); // исправленный вариант
//2
console.log(Number('100'), typeof Number('100')); // явное
//3
console.log('' + 1); // неявное
console.log(String(1), typeof String(1));
//4
console.log(String(1), typeof String(1)); // явное
//5
console.log(Boolean(0), typeof Boolean(0)); // явное
//6
console.log(+'001'); // неявное
console.log(Number('001'), typeof Number('001'));
//7
console.log(1 + ''); // неявное
console.log(String(1), typeof String(1));
//8
console.log(Boolean(1), typeof Boolean(1)); // явное
//9
console.log(String(001), typeof String(001)); // явное
//10
console.log(Number('Hello World'), typeof Number('Hello World')); // явное, но неверное (будет NaN)

// = = = = = = = = = = = = = = = = = =


console.log(Number(console.log), String(console.log), Boolean(console.log));


console.log(Number({ name: 'Maxim' }), String({ name: 'Maxim' }), Boolean({ name: 'Maxim' }));
console.log(Number(Symbol('key')), String(Symbol('key')), Boolean(Symbol('key')));
console.log(Number(Number), String(Number), Boolean(Number));
console.log(Number(''), String(''), Boolean(''));
console.log(Number(0), String(0), Boolean(0));
console.log(Number(-10), String(-10), Boolean(-10));
console.log(Number('-105'), String('-105'), Boolean('-105'));

