class CustomSelect {
    #id
    #options
    constructor(id, options = [{value, text}]){
        this.#id = id,
        this.#options = options
    }
}

const someObj = new 