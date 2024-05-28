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
        case 'add':
            obj[key] = ''
            return obj
        default:
            return obj
    }
}

// const result = handleObject(student, 'programmingLanguage', 'delete'); // { name: 'Maxim' }
// const result = handleObject(student, 'programmingLanguage', 'get');
const result = handleObject(student, 'newProperty', 'add');   // { name: 'Maxim', programmingLanguage: 'JavaScript', newProperty: '' }
console.log('result: ', result);

// Задание #4

const student2 = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const giveJobToStudent = (student, jobName) => {
    console.log(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);
    const newStudentObj = {
        ...student,
        job: jobName,
    }
    return newStudentObj
}
// через symbol
// const giveJobToStudent = (student, jobName) => {
//     console.log(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он jobName`);
//     const newStudentObj = {
//         ...student,
//         [Symbol("job")]: jobName,
//     }
//     return newStudentObj
// }

console.log(giveJobToStudent(student2, 'веб-разработчик'));

// Задание #5

function sum(...num) {
    return num.reduce((acc, number) => acc + num, 0)
}