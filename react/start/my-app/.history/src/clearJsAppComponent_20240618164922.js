import React from 'react';
import ReactDOM from 'react-dom/client';
// export class Clear extends React.Component {
//     render() {
//         return React.createElement('div', null, `Привет`);
//     }
// }

export class Clear extends React.Component {
    render(){
        return React.createElement("h1", {id: 'hello', className: 'class1'})
    }  
}
