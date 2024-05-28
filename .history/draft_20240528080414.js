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

const car2 = {
    [Symbol("name")]: "Toyota Corolla",
    [Symbol("name")]: "Nissan Note"
};

const symbols = Object.getOwnPropertySymbols(car);
for (const symbol of symbols) {
  console.log(`${symbol.description} - ${car[symbol]}`);
}



