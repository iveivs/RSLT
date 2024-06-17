const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
const todosIds = [42, 13, 14, 100]
const dataContainer = document.querySelector('#data-container')

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
            console.log('responses',responses);
            const dataResults = responses.map((response => response.json()))
            return Promise.all(dataResults)
        })
        .then(todos => {
            console.log('todos', todos);
            todos.forEach(todo => {
                const todoHTML = createTodoElement(todo.title)
                dataContainer.a
            })
        })
        .catch(error => {
            console.log('error', error);
        })
}

getTodosByIds(todosIds)