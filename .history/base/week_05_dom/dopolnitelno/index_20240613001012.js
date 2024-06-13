const selectropdown = document.createElement('div')
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