import { Module } from '../core/module';
const key = '2d0e848e05679623b697a492507d85ff';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&units=metric&appid=${key}`;






export class WeatherModule extends Module {
    constructor() {
        super('weather', 'Показать погоду');
        console.log('WeatherModule created');

    }

    getWetherData() {
        const weatherData = fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(json => {
                return json
            })
            .catch(error => console.error('Error fetching weather data:', error));
            return weatherData
    }

    trigger() {
        const whetherData = this.getWetherData()
        console.log('temperature',whetherData.main);
        const cover = document.createElement('div')
        cover.textContent = 'COVER'
        document.body.append(cover)
    }
}
