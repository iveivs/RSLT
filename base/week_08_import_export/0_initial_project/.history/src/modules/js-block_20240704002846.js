import JS_IMAGE from '../../assets/js.png'
class JSBlock {
    constructor() {
        this.container = document.createElement('div')
        this.container.className = 'js-block'
    }

    render() {
        const mainTitle = document.createElement('h1')
        mainTitle.className = 'main-title'
        mainTitle.textContent = 'JavaScript'

        const JSImageHTML = document.createElement('img')
        JSImageHTML.className = 'js-image'
        JSImageHTML.src = JS_IMAGE

        const foundedText = document.createElement('p')
        foundedText.textContent = 'С момента создания JavaScript прошло:'
        foundedText.className = 'founded-text'

        this.container.a
    }
}