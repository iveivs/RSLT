console.log(Number('10'), typeof Number('10')); // явное
//1
console.log(+'50'); // неявное
console.log(Number('50')); // исправленный вариант
//2
console.log(Number('100')); // явное
//3
console.log('' + 1); // неявное

//4
console.log(String(1)); 
//5
console.log(Boolean(0)); 
//6
console.log(+'001'); 
//7
console.log(1 + ''); 
//8
console.log(Boolean(1)); 
//9
console.log(String(001)); 
//10
console.log(Number('Hello World'));