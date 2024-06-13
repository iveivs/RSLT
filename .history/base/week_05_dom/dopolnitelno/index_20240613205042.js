class CustomSelect {
    #id
    #options
    constructor(id, options) {
        this.#id = id,
        this.#options = options
    }
    #currentSelectedOption

    #listMarkup() {
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
        this.#options.forEach(item => {
            const selectDropdownListItem = document.createElement('li')
            selectDropdownListItem.className = `select-dropdown__list-item`
            selectDropdownListItem.dataset.dataValue = `${item.value}`
            selectDropdownListItem.textContent = `${item.text}`

            selectDropdownList.append(selectDropdownListItem)
        })

        // откр/закр выпадающего списка
        selectDropdownButton.addEventListener('click', event => {
            if(event.target.closest('.select-dropdown__button')){
                selectDropdownList.classList.toggle('active')
            }
        })

        selectDropdownList.addEventListener('click', event => {
            const { target } = event
            this.#currentSelectedOption = this.#options.filter(elem => elem.value === +target.dataset.dataValue)
            selectDropdownText.textContent = target.textContent
            selectDropdownList.forEach(elem => {
                elem.classList.remove('selected')
            })
            target.classList.add('selected')
            selectDropdownList.classList.remove('active')
        })

        return selectDropdown

    }

    get selectedValue() {
        return this.#currentSelectedOption
    }

    render(container) {
        container.append(this.#listMarkup())
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








