console.log(Number('10'), typeof Number('10')); // явное
//1
console.log(+'50'); // неявное
console.log(Number('50'), typeof Number('50')); // исправленный вариант
//2
console.log(Number('100'), typeof); // явное
//3
console.log('' + 1); // неявное
console.log(String(1), typeof String(1));
//4
console.log(String(1), typeof); // явное
//5
console.log(Boolean(0), typeof); // явное
//6
console.log(+'001'); // неявное
console.log(Number('001'), typeof Number('001'));
//7
console.log(1 + ''); // неявное
console.log(String(1), typeof String(1));
//8
console.log(Boolean(1), typeof); // явное
//9
console.log(String(001)); // явное
//10
console.log(Number('Hello World')); // явное, но неверное (будет NaN)
