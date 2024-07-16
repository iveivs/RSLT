const key = '2d0e848e05679623b697a492507d85ff'

const someData = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

const weatherData = fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${}`)

console.log('CLG',someData);