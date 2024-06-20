class CustomSelect {
    #id
    #options
    constructor(id, options) {
        this.#id = id,
            this.#options = options
    }

    #listMarkup(){
        const selectDropdown = document.createElement('div')
        selectDropdown.className = `select-dropdown select-dropdown--${this.#id}`

        const selectDropdownButton = document.createElement('button')
        selectDropdownButton.className = `select-dropdown__button select-dropdown__button--${this.#id}`
        selectDropdown.append(selectDropdownButton)

        const selectDropdownText = document.createElement('span')
        selectDropdownText.className = `select-dropdown__text select-dropdown__text--${this.#id}`
        selectDropdownText.textContent = 'Выберите элемент'
        selectDropdownButton.append(selectDropdownText)

        const selectDropdownList = document.createElement('ul')
        selectDropdownList.className = `select-dropdown__list select-dropdown__list--${this.#id}`
        selectDropdown.append(selectDropdownList)
        this.#options.forEach( item => {
            const selectDropdownListItem = document.createElement('li')
            selectDropdownListItem.className = `select-dropdown__list-item`
            selectDropdownListItem.dataset.dataValue = `${item.value}`
            selectDropdownListItem.textContent = `${item.text}`

            selectDropdownList.append(selectDropdownListItem)
        })

        // container.append(selectDropdown)
        console.log(selectDropdown);
        return selectDropdown

    }

    render(container) {
        container.append()
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
// selectDropdownButton.addEventListener('click', event => {
//     const { target } = event

// })





