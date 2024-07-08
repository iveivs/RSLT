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
    input.setAttribute('type', 'number')
    input.setAttribute('max', '100')
    input.setAttribute('min', '1')
    input.setAttribute('type',)
    label.append(input)

    this.$rootElement.appendChild(label)
  }

  handleInput(event) {
    // ...
  }

  handleSubmit(event) {
    // ...
  }
}
