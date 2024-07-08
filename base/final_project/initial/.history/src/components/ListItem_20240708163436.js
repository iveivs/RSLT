import { Component } from '../core/Component';

// const somedate = new Date();
// let localDate = somedate.toLocaleDateString('ru-RU', {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit'
// })

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
    // console.log('TEST');
    // console.log(event.target);
    console.log('event.target.parentNode', event.target.parentNode);
    this.state.total -= this.state.amount
    console.log('CURRENT TOTAL');
    event.target.parentNode.remove()
  }
}
