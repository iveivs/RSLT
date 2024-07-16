import { Module } from '../core/module';
const key = '2d0e848e05679623b697a492507d85ff';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=55.75&lon=37.61&units=metric&appid=${key}`;
// const url2 = `http://api.openweathermap.org/geo/1.0/direct?q=Moscow&limit=5&appid=${key}`

export class WeatherModule extends Module {
    constructor() {
        super('weather', 'Погода в Москве');
        console.log('WeatherModule created');

        this.dataFromFetch = fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(json => {
                this.dataFromFetch = json
                console.log('json', json);
                console.log('this.dataFromFetch FETCH', this.dataFromFetch);
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    trigger() {
        console.log('this.dataFromFetch', this.dataFromFetch.main.temp);
        // console.log('this.dataFromFetch', this.dataFromFetch.name);
        const cover = document.createElement('div')
        cover.textContent = 'Погода в Москве'
        document.body.append(cover)

        const wetherDataMarkup = document.createElement('div')
        
    }
}
