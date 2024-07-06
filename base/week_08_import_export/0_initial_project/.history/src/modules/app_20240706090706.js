import { JSBlock} from "./js-block"
import { TimerBlock } from "./timer-block"

export default class App {
    #jsBlock
    #timerBlock
    constructor() {
        this.#jsBlock = new JSBlock()
        
    }
    run(){
        const jsBlockHTML = this.#jsBlock.render()
        document.body.append(jsBlockHTML)
    }
}
