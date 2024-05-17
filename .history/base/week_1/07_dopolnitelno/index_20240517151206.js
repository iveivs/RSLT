// Задание #1

const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

const halfString = javaScriptDescription.slice(0, javaScriptDescription.length / 2)

const replacedStr = halfString.replaceAll('а', 'А').replaceAll('a', 'A').replaceAll(' ', '').trim().repeat(3)
console.log(replacedStr[replacedStr.length / 2]);
console.log(replacedStr);

// - - - - - - - - - -

// Задание #1.2

let clientName = prompt("Введите имя клиента")
let clientSpentForAllTime = Number(prompt('Сколько клиент потратил за все время?'))
let clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?'))
let discount

if (Number.isNaN(Number(clientSpentToday)) || Number.isNaN(Number(clientSpentForAllTime)) ){
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.')
} else {

}



