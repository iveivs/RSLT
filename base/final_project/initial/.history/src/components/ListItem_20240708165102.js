import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
      total: props.total
    }
    console.log('ToTaL from LIST ITEM comp', this.state.total); // проверка пропсов 

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.setAttribute('id', `${this.state.id}`)
    this.$rootElement.setAttribute('data-amount', `${this.state.amount}`)

    const bold = document.createElement('b')
    bold.textContent = `- $ ${this.state.amount}`

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Удалить'
    deleteButton.className = 'delete-button'


    // ...
    this.$rootElement.textContent = `
      ${this.state.date.toLocaleDateString('ru-RU', { day: '2-digit', })}/${this.state.date.toLocaleDateString('ru-RU', { month: '2-digit', })}/${this.state.date.getFullYear()}, ${this.state.date.toLocaleTimeString()} 
      `
    this.$rootElement.appendChild(bold)
    this.$rootElement.appendChild(deleteButton)
    this.$deleteButton = deleteButton

    this.$deleteButton.addEventListener('click', this.handleDelete.bind(this) )
    // this.state.changeAmount
  }

  handleDelete(event){
    event.preventDefault();
    console.log('event.target.parentNode', event.target.parentNode);
    
    let curAmount = Number(event.target.parentNode.getAttribute('data-amount'))
    console.log('curAmount', curAmount);
    console.log('CURRENT TOTAL 1', this.state.total); // здесть почему-то хранится старый стейт тотал ??? предыдущий а не текущий
    this.state.total = this.state.total - curAmount
    console.log('CURRENT TOTAL 2', this.state.total);
    event.target.parentNode.remove()
  }
}
