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
    getLocalTime() {
        const now = new Date();
    
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0, поэтому добавляем 1
        const day = String(now.getDate()).padStart(2, '0');
    
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
    
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    trigger() {
        console.log('this.dataFromFetch', this.dataFromFetch.main.temp);
        const cover = document.createElement('div')
        cover.className = 'wether_cover'
        cover.textContent = 'Погода в Москве'
        document.body.append(cover)

        const currentTime = document.createElement('div')
        currentTime.

        const wetherDataMarkup = document.createElement('div')
        wetherDataMarkup.textContent = `Температура воздуха: ${this.dataFromFetch.main.temp}`
        cover.append(wetherDataMarkup)
    }
}
