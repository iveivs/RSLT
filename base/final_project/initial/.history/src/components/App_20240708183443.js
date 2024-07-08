import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';


export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: []
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    // ...
    const heading = document.createElement('h1');
    heading.className = 'total-amount'
    
    const span = document.createElement('span');
    span.textContent = `Итого: $ ${this.state.total}`;
    heading.append(span)
    this.$rootElement.appendChild(heading)
    this.$total = span
    
    const donateForm = new Form({onSubmit: this.onItemCreate.bind(this)});
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List(); // добавил в пропсы {changeTotal: this.changeTotal.bind(this)}
    this.$rootElement.appendChild(donateList.$rootElement);

    this.donateList = donateList
  }
  
  onItemCreate(amount) {
    // ...
    this.state.total = this.state.total + amount
    let total = this.state.total
    // const item = new ListItem({amount, total, }) // добавил total
    // {changeTotal: this.changeTotal.bind(this)}

    const item = new ListItem({amount, total, changeTotal: this.changeTotal.bind(this)})
    this.state.donates.push(item)
    this.donateList.addItem(item)
    
    this.$total.textContent = `Итого: $ ${this.state.total}`
    
  }
  changeTotal(delAmount){ // здесь должна была быть функция для изменения тотал в стейте, возможно она не нужна
    // console.log('this.state.total FROM CHANGE-TOTAL',this.state.total);
    console.log('TEST', delAmount);
    this.state.total = delAmount
  }
}
