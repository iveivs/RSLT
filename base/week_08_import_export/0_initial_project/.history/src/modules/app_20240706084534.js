import { JSBlock} from "./js-block"
imp

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
