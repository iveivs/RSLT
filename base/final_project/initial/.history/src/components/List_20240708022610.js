import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    // ...

    const list = document.createElement('h2')
    list.className = 'donates-container__title'
    list.textContent = 'Список донатов'
    this.$rootElement.append(list)

    const listContainer = document.createElement('div')
    listContainer.className = 'donates-container__donates'
    this.$rootElement.append(l)
  }

  addItem(item) {
    // ...
  }
}