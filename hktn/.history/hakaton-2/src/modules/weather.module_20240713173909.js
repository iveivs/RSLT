import { Module } from '../core/module';

export class WeatherModule extends Module {
    constructor() {
        super('', 'Случайный фон');
        console.log('WeatherModule created');
    }

    

    trigger() {
        let backColor = this.getRandomColor();
        const body = document.querySelector('body');
        body.style.backgroundColor = `${backColor}`
    }
}
