import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    // ...
  }
}
