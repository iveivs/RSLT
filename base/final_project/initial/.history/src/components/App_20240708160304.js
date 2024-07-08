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
    const donateList = new List({changeAmount: this.changeAmount.bind(this)});
    this.$rootElement.appendChild(donateList.$rootElement);

    this.donateList = donateList
  }
  
  onItemCreate(amount) {
    // ...
    const item = new ListItem({amount})
    this.state.donates.push(item)
    this.donateList.addItem(item)
    this.state.total = this.state.total + amount
    this.$total.textContent = `Итого: $ ${this.state.total}`
    
  }
  changeAmount(amount){
    console.log('changeAmount');
    console.log(this.state.amount);
  }
}
