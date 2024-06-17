const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
// фетч принимает два параметра, первый это url, второй это объект с настройкой нашего запроса
// GET POST DELETE

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
    })
    .catch((error) => {
        console.log('error', error);
    })

