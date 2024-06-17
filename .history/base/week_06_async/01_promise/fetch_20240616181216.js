const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
// фетч принимает два параметра, первый это url, второй это объект с настройкой нашего запроса
// GET POST DELETE
const createTodoElement = (text) => {
    const todoElement = document.createElement('li')
    const todoElemAnchor = document.createElement('a')
    todoElemAnchor.href = '#'
    todoElemAnchor.textContent = text
    todoElement.append(todoElemAnchor)
    return todoElement

}
const dataContainer = document.querySelector('#data-container')
const getAllTodos = () => {

}
const result = fetch(TODOS_URL, {
    method: 'GET'
})

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
            const tod
        })
    })
    .catch((error) => {
        console.log('error', error);
    })

