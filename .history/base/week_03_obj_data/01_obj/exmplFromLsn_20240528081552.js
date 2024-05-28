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
Object.values(car).forEach(value => console.log(value));

// Метод Object.entries() возвращает массив записей для объекта, каждая из которых также представляет собой массив
Object
    .entries(car) // Вернет массив [ ["name", "Toyota Corolla"], ... ]
    .forEach(arr => console.log(`${arr[0]}: ${arr[1]}`));

//   Однако есть более элегантный способ работы с массивами в параметрах. Рассмотрим тот же код, но с использованием деструктуризации:
Object
    .entries(car)
    .forEach(([key, value]) => console.log(`${key}: ${value}`));

// - - - - - - - - - - - - - -
// Symbol для создания ключей объекта

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
console.log(car2[id]);

// Объединение нескольких объектов в один
// через spread оператор
const car3 = {
    name: "Toyota Corolla",
    year: 2017
};

const carOwner = {
    ownerName: "Ivan Ivanov",
    ownerAge: 27
};

const carFullInfo = {
    ...car3,
    ...carOwner,
    additionalInfo: "Дополнительная информация"
};

console.log(carFullInfo);

// через Object.assign()

const car4 = {
    name: "Toyota Corolla",
    year: 2017
  };
  
  const carOwner = {
    ownerName: "Ivan Ivanov",
    ownerAge: 27
  };
  
  Object.assign(car, carOwner);
  
  console.log(car);