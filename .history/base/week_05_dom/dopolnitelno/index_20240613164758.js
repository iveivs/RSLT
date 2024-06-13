class CustomSelect {
    #id
    #options
    constructor(id, options) {
        this.#id = id,
            this.#options = options
    }

    #listMarkup(){
        
    }

    render(container) {
        
    }

    get data() {
        console.log(this.#id, this.#options);
    }
}

const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' }
];

const customSelect = new CustomSelect('1234', options);
const mainContainer = document.querySelector('#container'); 
customSelect.render(mainContainer);

const selectDropdownButton = document.querySelector('.select-dropdown__button')
selectDropdownButton.addEventListener('click', event => {
    const { target } = event

})






