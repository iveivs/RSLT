// let health = prompt('Введите число параметра "здоровье" для персонажа')
// if (health <= 0 || !health) {
//     console.log('debugg', health);
//   alert('Параметр "здоровье" должен быть больше нуля!')
// } else {
//   alert(`Параметр "здоровье" равен ${health}`);
// }

const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия'));

if (temperatureInCelsius === 0) {
    alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

const temperatureInFahrenheit = (temperatureIncelsius) * 9 / 5 + 32;
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);