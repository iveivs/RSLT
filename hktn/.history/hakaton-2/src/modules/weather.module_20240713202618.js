import { Module } from '../core/module';
const key = '2d0e848e05679623b697a492507d85ff';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&units=metric&appid=${key}`;

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



export class WeatherModule extends Module {
    constructor() {
        super('weather', 'Показать погоду');
        console.log('WeatherModule created');
        
    }

    #getWetherData() {

    }
    trigger() {
        
    }
}
