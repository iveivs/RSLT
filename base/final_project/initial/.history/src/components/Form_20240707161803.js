import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: ''
    }
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    // ...
    const label = document.createElement
  }

  handleInput(event) {
    // ...
  }

  handleSubmit(event) {
    // ...
  }
}
