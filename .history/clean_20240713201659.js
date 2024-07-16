// const key = '48bdddcf51b8a08cee24ea21e0ce45d0'

// const weatherData = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99units=metric.&appid=${key}`)
//     .then(response => response.json())
//     .then(json => console.log(json))

// console.log('weatherData', weatherData);
// = = = = = = = = = = = = = = = = = = = = = =

// const key = '2d0e848e05679623b697a492507d85ff';
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&units=metric&appid=${key}`;

// const weatherData = fetch(url)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(json => console.log(json))
//     .catch(error => console.error('Error fetching weather data:', error));

// console.log('weatherData', weatherData);

// let someData1 
// const someData = fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(data => {
//     someData1 = data
//     console.log('CLG fetch',someData);
// });
// console.log('CLG',someData);

// = = = = = = = = = = = = = = = =
// async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     if (!response.ok) {
//         throw new Error(`Ошибка запроса: ${response.status}`);
//     }
//     return response.json();
// }

// getData().then(data => {
//     console.log(data);
// });