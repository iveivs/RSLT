const selectDropdown = document.createElement('div')
selectDropdown.className = 'select-dropdown select-dropdown--123'

const selectDropdownButton = document.createElement('button')
selectDropdownButton.className = 'select-dropdown__button select-dropdown__button--123'
selectDropdown.append(selectDropdownButton)

const selectDropdownText = document.createElement('span')
selectDropdownText.className = 'selectDropdownText'


console.log(selectDropdown);
class CustomSelect {
    #id
    #options
    constructor(id, options){
        this.#id = id,
        this.#options = options
    }

    render(container){
        
    }

    get data(){
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

const customSelect = new CustomSelect('123', options);
console.log(customSelect);
customSelect.data