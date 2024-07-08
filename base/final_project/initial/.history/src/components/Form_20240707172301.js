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
    input.setAttribute('required', '')
    label.append(input)

    const button = document.createElement('button')
    button.className = 'donate-form__submit-button'
    button.textContent = 'Задонатить'
    button.setAttribute('disabled', '')
    button.setAttribute('type', 'submit')

    this.$rootElement.appendChild(label)
    this.$rootElement.appendChild(button)

    this.$input = input
    this.$button = button

    this.$input.addEventListener('input', this.handleInput)
    this.$button.addEventListener('submit', this.)
  }

  handleInput(event) {
    // ...
    console.log('CLICKED', 'event', event);
  }

  handleSubmit(event) {
    // ...
  }
}
