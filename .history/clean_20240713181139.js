const key = '2d0e848e05679623b697a492507d85ff'

const someData = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

const weatherData = fetch()

console.log('CLG',someData);