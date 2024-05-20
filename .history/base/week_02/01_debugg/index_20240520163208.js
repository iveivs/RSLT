// # Задание1

let health = prompt('Введите число параметра "здоровье" для персонажа')
if (health <= 0 || !health) {
    console.log('test', health);
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
  alert(`Параметр "здоровье" равен ${health}`);
}

// # Задание2

const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия'));

if (temperatureInCelsius === 0) {
        console.log('typeof temperatureInCelsius:', typeof temperatureInCelsius); 
    alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}
const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);

// # Задание3

const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    console.log('test totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
    const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100);
    totalJuniorDevelopersSalary += salaryWithTax;
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);

// # Задание4

let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    let currentNum = numbers[i] ** 3
    sum += currentNum;
} 
console.log(sum); // 1158411

// Через цикл for of
sum = 0;
console.log(numbers);
for (let num of numbers){
    num = num ** 3;
    sum += num;
} 
console.log(sum);