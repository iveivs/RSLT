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
    // heading.textContent = `${props.title}: ${this.state.total}`;
    span.textContent = `${props.title}: '$' ${this.state.total}`;
    heading.append(span)
    this.$heading = heading;
    this.$rootElement.appendChild(heading)
    
    const donateForm = new Form();
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
  }
  
  onItemCreate(amount) {
    // ...
  }
}