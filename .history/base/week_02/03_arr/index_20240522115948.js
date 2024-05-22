// Задание #1
// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

// const giveParcel = arr => {
//     const client = arr.shift()
//     console.log(`${client} получил(а) посылку. В очереди осталось ${arr.length} человек`);
// }
// giveParcel(peopleWaiting)
// giveParcel(peopleWaiting)
// giveParcel(peopleWaiting)
// const leaveQueueWithoutParcel = arr => {
//     const client = arr.pop()
//     console.log(`${client} не получил(а) посылку и ушел(ла) из очереди`);
// }
// leaveQueueWithoutParcel(peopleWaiting)
// leaveQueueWithoutParcel(peopleWaiting)
// leaveQueueWithoutParcel(peopleWaiting)
// leaveQueueWithoutParcel(peopleWaiting)
// console.log(peopleWaiting);

//  - - - - - - - - - - -

// Задание #2

// const getSumOfSequence = number => {
//     let newArr = []
//     for (let i = 1; i <= number; i++) {
//         newArr.push(i)
//     }
//     const sumOfSequence = newArr[0] + newArr[newArr.length - 1]
//     return sumOfSequence
// }
// console.log(getSumOfSequence(5));

// Задание #3

const coffees = ['Latte', 'Cappuccino', 'Americano'];
let coffeeName = prompt(`Поиск кофе по названию:`)
const searchedCoffee = coffees.find((elem) => {
    if(coffeeName.toLowerCase() === elem.toLowerCase()){
        return elem
    }
})
const raitingNumber = coffees.indexOf(searchedCoffee) + 1
console.log(typeof raitingNumber);

if()
alert(`Держите ваш любимый кофе ${searchedCoffee}. Он ${raitingNumber}-й по популярности в нашей кофейне.`)