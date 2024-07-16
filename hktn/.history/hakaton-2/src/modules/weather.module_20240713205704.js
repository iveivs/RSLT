import { Module } from '../core/module';
const key = '2d0e848e05679623b697a492507d85ff';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&units=metric&appid=${key}`;






export class WeatherModule extends Module {
    constructor() {
        super('weather', 'Показать погоду');
        console.log('WeatherModule created');
        this.dataFromFetch
    }

    async getWetherData() {
        // const weatherData = fetch(url)
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error(`HTTP error! status: ${response.status}`);
        //         }
        //         return response.json();
        //     })
        //     .then(json => {
        //         this.dataFromFetch = json
        //         console.log('json', json);
        //         console.log('this.dataFromFetch FETCH', this.dataFromFetch);
        //     })
        //     .catch(error => console.error('Error fetching weather data:', error));
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`Ошибка запроса: ${response.status}`);
        }
        response
        
            
    }

    trigger() {
        this.getWetherData()
        console.log('this.dataFromFetch', this.dataFromFetch);
        const cover = document.createElement('div')
        cover.textContent = 'COVER'
        document.body.append(cover)
    }
}
