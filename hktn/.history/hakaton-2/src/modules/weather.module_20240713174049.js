import { Module } from '../core/module';



export class WeatherModule extends Module {
    constructor() {
        super('weather', 'Показать погоду');
        console.log('WeatherModule created');
    }

    #
    trigger() {
        
    }
}
