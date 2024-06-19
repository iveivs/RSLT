import React from 'react';
import ReactDOM from 'react-dom/client';
export class Clear extends React.Component {
    render() {
        const mainElem = React.createElement('div', null, `Привет`);
        mainElem.React.textContent = 'Hello'
        return mainElem
    }
}

// export class Clear extends React.Component {
//     render(){
//         return React.createElement("h1", {id: 'HELLO', className: 'class1'})
//     }  
// }
