import React from 'react';
import './App.css';
import logo from './logo.svg';
// import ReactDOM from 'react-dom/client';
export class Clear extends React.Component {
    render() {
        // const mainElem = React.createElement('div', null, `Привет`);
        const mainElem = React.createElement('div', {className: 'App'}, [
            React.createElement('header', {className: "App-header"}, null,[
                React.createElement('img', {src: {logo},  className: "App-logo", alt: "logo" }),
                React.createElement('p', null, 'Edit'),
                
            ])
        ]);
        
        return mainElem
    }
}

// export class Clear extends React.Component {
//     render(){
//         return React.createElement("h1", {id: 'HELLO', className: 'class1'})
//     }  
// }
