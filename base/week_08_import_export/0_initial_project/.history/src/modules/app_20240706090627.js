import { JSBlock} from "./js-block"
import { t}

export default class App {
    #jsBlock
    constructor() {
        this.#jsBlock = new JSBlock()
    }
    run(){
        const jsBlockHTML = this.#jsBlock.render()
        document.body.append(jsBlockHTML)
    }
}
