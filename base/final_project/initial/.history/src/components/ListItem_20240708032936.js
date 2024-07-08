import { Component } from '../core/Component';


export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date().toLocaleTimeString(),
      amount: props.amount
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    // ...
    // const div = document.createElement('div')
    // div.className = 'donate-item'
    this.$rootElement.textContent = `${this.state.id}, ${this.state.date}, ${this.state.amount}`
    // this.$rootElement.append(div)
  }
}
