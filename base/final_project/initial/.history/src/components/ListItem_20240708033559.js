import { Component } from '../core/Component';

const date = new Date();
let localDate = date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
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

    const bold = document.createElement('b')
    bold.textContent = `TEXT${this.state.amount}`

    // ...
    // const div = document.createElement('div')
    // div.className = 'donate-item'
    this.$rootElement.append(bold)
    this.$rootElement.textContent = `${this.state.id}, ${this.state.date} `
    // this.$rootElement.append(div)
  }
}
