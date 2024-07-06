import { JSBlock} from "./js-block"
export default class App {
    constructor() {
        
        this.#JSBlock = new JSBlock()
    }
    run(){
        document.body.textContent = 'World Hello'
    }
}
