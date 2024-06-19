import React from 'react';
import './App.css';
import logo from './logo.svg';
const getCurrentYear = new Date().getFullYear()

export class Clear extends React.Component {
    render() {
        const mainElem = React.createElement('div', {className: 'App', key: }, [
            React.createElement('header', {className: "App-header"}, null,[
                React.createElement('img', {src: logo,  className: "App-logo", alt: "logo" }),
                React.createElement('p', null, 'Edit src/App.js and save to reload. 2'),
                React.createElement('a', {
                    className: "App-link",
                href: "https://reactjs.org",
                target: "_blank",
                rel: "noopener noreferrer"},
                "Learn React"
                ),
                React.createElement('p', null, getCurrentYear),
            ])
        ]);
        
        return mainElem
    }
}

