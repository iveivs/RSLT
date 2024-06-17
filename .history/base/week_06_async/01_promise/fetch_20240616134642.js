const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
const result = fetch(TODOS_URL)
    .then(response => response.json())
    .then(json => console.log(json))