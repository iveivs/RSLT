import { JSBlock} from "./js-block"
export default class App {
    #JSBlock
    constructor() {
        this.#JSBlock = new JSBlock()
    }
    run(){
        const JSBlockHTML = 
        document.body.textContent = 'World Hello'
    }
}
