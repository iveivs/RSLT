const car = {
    name: "Toyota Corolla",
    year: 2017,
    isNew: false
};

const keysCar = Object.keys(car)
const valuesCar = Object.values(car)
const entrCar = Object.entries(car)
console.log(keysCar);
console.log(valuesCar);
console.log(entrCar);

const id = Symbol("id");

const car2 = {
    [id]: 123,
    [Symbol("name")]: "Toyota Corolla",
    [Symbol("name")]: "Nissan Note"
};

const symbols = Object.getOwnPropertySymbols(car2);
for (const symbol of symbols) {
    console.log(`${symbol.description} - ${car2[symbol]}`);
}



