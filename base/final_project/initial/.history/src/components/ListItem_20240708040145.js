import { Component } from '../core/Component';

const somedate = new Date();
let localDate = somedate.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
})

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: localDate,
      date: new Date().toLocaleTimeString(),
      amount: props.amount
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    const bold = document.createElement('span')
    bold.textContent = 'Its B'
    this.$rootElement.appendChild(bold)

    // ...
    this.$rootElement.textContent = `${this.state.id}, ${this.state.date}  ${this.state.amount}` + '<b>TXT</b>
  }
}
