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






// 0
// : 
// {name: 'Moscow', local_names: {…}, lat: 55.7504461, lon: 37.6174943, country: 'RU', …}
// 1
// : 
// {name: 'Moscow', local_names: {…}, lat: 46.7323875, lon: -117.0001651, country: 'US', …}
// 2
// : 
// {name: 'Moscow', lat: 45.071096, lon: -69.891586, country: 'US', state: 'Maine'}
// 3
// : 
// {name: 'Moscow', lat: 35.0619984, lon: -89.4039612, country: 'US', state: 'Tennessee'}
// 4
// : 
// {name: 'Moscow', lat: 39.5437014, lon: -79.0050273, country: 'US', state: 'Maryland'}