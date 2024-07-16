const key = '2d0e848e05679623b697a492507d85ff'



const weatherData = fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${key}`)
    .then(response => response.json())
    .then(json => console.log(json))

console.log('CLG',someData);
console.log('weatherData', weatherData);