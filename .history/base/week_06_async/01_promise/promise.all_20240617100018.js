const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

const createTodoElement = (text) => {
    const todoElement = document.createElement('li')
    const todoElemAnchor = document.createElement('a')
    todoElemAnchor.href = '#'
    todoElemAnchor.textContent = text
    todoElement.append(todoElemAnchor)
    return todoElement
}

const getTodosByIds = (ids) => {
    const request = ids.map
}