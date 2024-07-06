import { JSBlock} from "./js-block"

export default class App {
    #jsBlock
    constructor() {
        this.#jsBlock = new JSBlock()
    }
    run(){
        const JSBlockHTML = this.#JSBlock.render()
        document.body.append(JSBlockHTML)
    }
}
