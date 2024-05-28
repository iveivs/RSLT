function setName(entity, value) {
    if (typeof entity === 'object') {
        entity.name = value
    } else {
        entity = value
    }
}

const developer = {
    name: "Maxim"
}
let developerName = 'Maxim'

setName(developer, 'Max')
setName(developerName, 'Max')

// console.log('developer', developer)
// console.log('developerName', developerName)

developerName = 'Max'
// console.log('developerName 2', developerName)

//  - - - - - - - - - - -
// Перебор объекта

const car = {
    name: "Toyota Corolla",
    year: 2017,
    isNew: false
};

for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}

  // Вывод:
  // name: Toyota Corolla
  // year: 2017
  // isNew: false

//   Object.keys() и Object.values()

const keys = Object.keys(car);
for (const key of keys) {
  console.log(`${key}: ${car[key]}`);
}
// Сделаем то же самое в одну строку с помощью метода forEach() и стрелочной функции:

Object.keys(car).forEach(key => console.log(`${key}: ${car[key]}`));

// Аналогичным образом работает метод Object.values(). Выведем значения всех свойств объекта:
