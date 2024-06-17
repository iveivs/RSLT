const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
const fetch(TODOS_URL)
    .then(response => response.json())
    .then(json => console.log(json))