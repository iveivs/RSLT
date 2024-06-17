const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

console.log('TEST');

const createUserElement = (text) => {
    const todoElement = document.createElement('li')
    const todoElemAnchor = document.createElement('a')
    todoElemAnchor.href = '#'
    todoElemAnchor.textContent = text
    todoElement.append(todoElemAnchor)
    return todoElement
}

const dataContainer = document.querySelector('#data-container')

const getAllUsers = () => {
    toggleLoader()
    const result = fetch(USERS_URL)

    result
    .then((response) => {
        console.log('response', response);
        if(!response.ok){
            throw new Error('Ошибка запроса')
        }
        return response.json()
    })
    .then((todos) => {
        console.log('todos', todos);
        todos.forEach((todo)=> {
            const todoHtml = createTodoElement(todo.title)
            dataContainer.append(todoHtml)
        })
    })
    .catch((error) => {
        console.log('error', error);
    })
    .finally(() => {
        toggleLoader()
    })
}

getAllUsers()