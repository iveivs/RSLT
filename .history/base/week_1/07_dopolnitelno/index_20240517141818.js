// Задание #1

const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

const halfString = javaScriptDescription.slice(0, javaScriptDescription.length / 2)

const replacedStr = halfString.replaceAll('а', 'А').replaceAll('a', 'A').replaceAll(' ', '').trim().repeat(3)
console.log(replacedStr[replacedStr.length / 2]);
console.log(replacedStr);

// - - - - - - - - - -

// Задание #1.2

const clientName = 'Igor'
let clientSpentForAllTime = 110
const clientSpentToday = 25
let discount

if( 100 < clientSpentForAllTime < 300) {
    discount = 10
} else if(300 < clientSpentForAllTime < 500) {
    discount = 20
} else if(clientSpentForAllTime > 500) {
    discount = 30
}

// alert(`Вам предоставляется скидка в ${discount}%`)

let total = clientSpentToday / 100 * ( 100 - discount)
console.log(total);
clientSpentForAllTime += clientSpentToday
console.log(clientSpentForAllTime);

