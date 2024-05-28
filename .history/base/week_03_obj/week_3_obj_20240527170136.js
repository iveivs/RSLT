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

usersOnline.forEach(elem =>  {
    usersOnlineNamesArr.push(elem.username)
})
let usersOnlineNames = usersOnlineNamesArr.join(', ')
console.log(usersOnlineNames);
// console.log(`Сейчас в онлайн следующие пользователи: ${usersOnline.forEach(elem => elem.status)}`);