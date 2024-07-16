import { Module } from '../core/module';

export class WeatherModule extends Module {
    constructor() {
        super('background', 'Случайный фон');
        console.log('BackgroundModule created');
    }

    

    trigger() {
        let backColor = this.getRandomColor();
        const body = document.querySelector('body');
        body.style.backgroundColor = `${backColor}`
    }
}
