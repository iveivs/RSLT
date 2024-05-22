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

//  - - - - - - - - - - -

// Задание #3

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// let coffeeName = prompt(`Поиск кофе по названию:`)
// const searchedCoffee = coffees.find((elem) => {
//     if(coffeeName.toLowerCase() === elem.toLowerCase()){
//         return elem
//     }
// })
// const raitingNumber = coffees.indexOf(searchedCoffee) + 1

// if(searchedCoffee){
//     alert(`Держите ваш любимый кофе ${searchedCoffee}. Он ${raitingNumber}-й по популярности в нашей кофейне.`)
// } else {
//     alert('К сожалению, такого вида кофе нет в наличии')
// }

//  - - - - - - - - - - -

// Задание #4

// const prices = [1.5, 1, 2];

// const updatedPrices = prices.map(elem => elem + .5)
// console.log(updatedPrices);

// updatedPrices.forEach((elem, index) => alert(`Кофе ${coffees[index]} сейчас стоит ${elem} евро`))

//  - - - - - - - - - - -

// Задание #5
// const clientsEstimations = []

// function askClientToGiveEstimation() {
//     let userRaiting = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'))
//     if(userRaiting > 0 &&  userRaiting < 11) {
//         clientsEstimations.push(userRaiting)
//     }
// }
// for (let i = 0; i < 3; i++) {
//     askClientToGiveEstimation()
// }

// без метода filter

// let goodEstimations = 0
// let notGoodEstimations = 0
// clientsEstimations.forEach(elem => {
//     if(elem > 5){
//         goodEstimations++
//     } else {
//         notGoodEstimations++
//     }
// })

// console.log(goodEstimations);
// console.log(notGoodEstimations);
//  - - -

// c методом filter
// let goodEstimations = clientsEstimations.filter( elem => elem > 5).length
// let notGoodEstimations = clientsEstimations.filter( elem => elem <= 5).length


// console.log(goodEstimations);
// console.log(notGoodEstimations);

// Задание #6

const numbers = [10, 4, 100, -5, 54, 2];

let summCube = 0

// for (let i = 0; i < numbers.length; i++) {
//     summCube += numbers[i] ** 3
//     console.log(summCube);
    
// }
// console.log(summCube);

//  - - -

// for(let elem of numbers) {
//     summCube += elem ** 3
// }
// console.log(summCube);
//  - - -

// numbers.forEach( (elem) => summCube += elem ** 3)
// console.log(summCube);
//  - - -

summCube = numbers.reduce((acc))