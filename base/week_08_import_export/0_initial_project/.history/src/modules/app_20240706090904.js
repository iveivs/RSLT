import { JSBlock} from "./js-block"
import { TimerBlock } from "./timer-block"

export default class App {
    #jsBlock
    #timerBlock
    constructor() {
        this.#jsBlock = new JSBlock()
        this.#timerBlock = new TimerBlock(new Date())
    }
    run(){
        const jsBlockHTML = this.#jsBlock.render()
        const timerBlockHTML
        document.body.append(jsBlockHTML)

    }
}
