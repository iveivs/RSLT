// import { getTodayDateFormat, getPresizeDateDifference} from '../core//utils/date'
// другой вариант импорта
import * as DateUtils from '../core//utils/date'

export class    TimerBlock {
    #date
    #timerContainer
    #timerTextHTML
    constructor(date) {
        this.#date = date
        this.#timerContainer = document.createElement('div')
        this.#timerTextHTML = document.createElement('h2')
    }

    #getTimerContent() {
        return DateUtils.getPresizeDateDifference(new Date, this.#date)
    }

    render() {
        this.#timerContainer.id = 'timer'
        this.#timerTextHTML.className = 'timer-text'
        this.#timerTextHTML.textContent = this.#getTimerContent()

        const todayDateHTML = document.createElement('div')
        todayDateHTML.className = 'today-date'
        const 
        todayDateHTML.textContent = DateUtils.getTodayDateFormat(new Date)

        this.#timerContainer.append(this.#timerTextHTML, todayDateHTML)

        return this.#timerContainer
    }
}