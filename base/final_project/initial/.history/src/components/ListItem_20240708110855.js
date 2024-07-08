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
      amount: props.amount
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    const bold = document.createElement('b')
    bold.textContent = `- $ ${this.state.amount}`
    

    // ...
    this.$rootElement.textContent = `${this.state.date.getDay()}/${this.state.date.getMonth()}/${this.state.date.getFullYear()}, ${this.state.date.toLocaleTimeString()} `
    this.$rootElement.appendChild(bold)
  }
}
