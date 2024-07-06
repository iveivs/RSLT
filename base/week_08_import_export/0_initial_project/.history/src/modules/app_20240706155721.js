import { JSBlock} from "./js-block"
import { TimerBlock } from "./timer-block"

export default class App {
    #jsBlock
    #timerBlock
    constructor() {
        this.#jsBlock = new JSBlock()
        this.#timerBlock = new TimerBlock(new Date(2020, 0 , ))
    }
    run(){
        const jsBlockHTML = this.#jsBlock.render()
        const timerBlockHTML = this.#timerBlock.render()
        document.body.append(jsBlockHTML, timerBlockHTML)

    }
}
