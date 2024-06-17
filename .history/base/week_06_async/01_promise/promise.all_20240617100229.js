const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
const todos

const createTodoElement = (text) => {
    const todoElement = document.createElement('li')
    const todoElemAnchor = document.createElement('a')
    todoElemAnchor.href = '#'
    todoElemAnchor.textContent = text
    todoElement.append(todoElemAnchor)
    return todoElement
}

const getTodosByIds = (ids) => {
    const request = ids.map((id) => fetch(`${TODOS_URL}/${id}`))
    Promise.all(request)
        .then((results) => {
            console.log('results', results);
        })
}

getTodosByIds()