// const car = {
//     name: "Toyota Corolla",
//     year: 2017,
//     isNew: false
// };

// const keysCar = Object.keys(car)
// const valuesCar = Object.values(car)
// const entrCar = Object.entries(car)
// console.log(keysCar);
// console.log(valuesCar);
// console.log(entrCar);

// const id = Symbol("id");

// const car2 = {
//     [id]: 123,
//     [Symbol("name")]: "Toyota Corolla",
//     [Symbol("name")]: "Nissan Note"
// };

// const symbols = Object.getOwnPropertySymbols(car2);
// for (const symbol of symbols) {
//     console.log(`${symbol.description} - ${car2[symbol]}`);
// }
// console.log(car2[id]); 
// = = = = = = = = = = = = =
// let arr = []
// let obj = {}
// console.log(typeof arr);
// console.log(typeof obj);
// console.log(arr);
// console.log(obj);

// const date = new Date()
// console.log(date);

const date1 = new Date('September 5, 1985 14:24:00')
// const date2 = new Date(2006, 4, 20)

console.log(date1.getTime());

const date2 = new Date(487195200000)
console.log(date2);