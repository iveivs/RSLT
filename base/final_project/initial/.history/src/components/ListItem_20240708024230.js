import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now()
      
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    // ...
  }
}