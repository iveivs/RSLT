import React from 'react';
import ReactDOM from 'react-dom/client';
export class Clear extends React.Component {
    // const markForApp = `
    // <div className="App">
    //     <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //         Edit <code>src/App.js</code> and save to reload. 2
    //     </p>
    //     <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //     >
    //         Learn React
    //     </a>
    //     </header>
    //     </div
    //     `
    // return markForApp
    // const divApp = document.createElement('div')
    // divApp.textContent = 'TEST REACT'
    // return divApp
    render() {
        return React.createElement('div', null, `Привет, ${this.props.toWhat}`);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Hello, {toWhat: 'Мир'}, null));