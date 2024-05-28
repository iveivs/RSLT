// Задание #1
const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

const usersOnline = users.filter(item => item.status === 'online')

let usersOnlineNamesArr = []

usersOnline.forEach(elem => {
    usersOnlineNamesArr.push(elem.username)
})
let usersOnlineNames = usersOnlineNamesArr.join(', ')
console.log(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);

// Задание #2


const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
];

function giveTalonsInOrder(patients, orders) {
    let currentOrder = orders.filter(elem => elem )
}

