const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
// фетч принимает два параметра, первый это url, второй это объект с настройкой нашего запроса
// GET POST DELETE
const result = fetch(TODOS_URL, {
    method: 'GET'
})

result
    .then((response) => {
        return response.J
    })
    .then((todos) => {
        console.log('todos', todos);
    })
    .catch((error) => {
        console.log('error', error);
    })

