export class    TimerBlock {
    #date
    #timerContainer
    #timerTextHTML
    constructor(date) {
        this.#date = date
        this.#timerContainer = document.createElement('div')
        this.#timerTextHTML = document.createElement('h2')
    }
    render
}