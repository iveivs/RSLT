import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
      changeTotal: props.changeTotal
    }
    

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
  }

  handleDelete(event){
    event.preventDefault();
    let curAmount = Number(event.target.parentNode.getAttribute('data-amount'))
    this.state.changeTotal(curAmount)
    event.target.parentNode.remove()
  }
}
