const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

// используя только fetch
fetch(USERS_URL)
    .then((response) => response.json())
    .then((users) => {
        console.log('users', users);
        const firstUserId = users[0]?.id
        console.log('firstUserId', firstUserId);
        fetch(`${TODOS_URL}?userId=${firstUserId}`)
            .then((response) => response.json())
            .then((todos) => {
                console.log('todos', todos);
            })
            .catch((error) => {
                console.log(error);
            })
    })
    .catch((error) => {
        console.log(error);
    })

// используя async await
const getTodosWithUserData = async () => {
    try {
        const response = await fetch(USERS_URL)
        if(!response.ok) {
            throw new Error('Ошибка в получении даннх в пользователях')
        }
        const users = await response.json()
        console.log('users2', users);
        const firstUserId = users[0]?.id
        const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUserId}`)
        if(!response.ok) {
            throw new Error('Ошибка в получении даннх в пользователях')
        }
        const todos = await todosResponse.json()
        console.log('todos2', todos);
    } catch (error) {
        console.log('error', error);
    } finally {
        console.log('finaly');
    }

}

const promise = getTodosWithUserData()
console.log('promise', promise);