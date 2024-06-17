const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
const todosIds = [42, 13, 14, 100]

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
    console.log('request',request);
    Promise.all(request)
        .then((responses) => {
            console.log('',);
            const dataResults = responses.map((response => response.json()))
        })
}

getTodosByIds(todosIds)