import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: ''
    }
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    // ...
    const label = document.createElement('label')
    label.className = 'donate-form__input-label'
    label.textContent = 'Введите сумму в $'

    const input = document.createElement('input')
    input.className = 'donate-form__donate-input'
    input.setAttribute('name', 'amount')
    label

    this.$rootElement.appendChild(label)
  }

  handleInput(event) {
    // ...
  }

  handleSubmit(event) {
    // ...
  }
}
