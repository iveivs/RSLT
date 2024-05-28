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
    let currentOrder = []
    for (let key of orders) {
        for (let elem of patients) {
            if (key === elem.id) {
                currentOrder.push(elem)
            }
        }
    }
    return currentOrder
}

console.log(giveTalonsInOrder(people, ordersArr));

// Задание #3

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}

const handleObject = (obj, key, action) => {
    switch (action) {
        case 'delete':
            delete obj[key]
            return obj
        case 'get':
            return obj[key]

        default:
            break;
    }
}

// const result = handleObject(student, 'programmingLanguage', 'delete');
const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result); // { name: 'Maxim' }