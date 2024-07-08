import { Component } from '../core/Component';

export class List extends Component {
  setup(props) {
    this.state = { // создавал стейт для вызова функции из app, возможно тоже не нужно
      changeTotal: props.changeTotal
    } 

    // this.state.changeTotal() // проверка вызова пропса
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    // ...

    const list = document.createElement('h2')
    list.className = 'donates-container__title'
    list.textContent = 'Список донатов'
    this.$rootElement.append(list)

    const listContainer = document.createElement('div')
    listContainer.className = 'donates-container__donates'
    this.$rootElement.appendChild(listContainer)

    this.$listContainer = listContainer
  }

  addItem(item) {
    // ...
    this.$listContainer.appendChild(item.$rootElement)
  }
}