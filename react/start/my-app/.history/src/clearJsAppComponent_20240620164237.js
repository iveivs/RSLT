import React from 'react';
import './App.css';
import logo from './logo.svg';
// декларативный(помоему вс)
const getCurrentYear = new Date().getFullYear()

// Используя классовый подход
export class Clear extends React.Component {
    render() {
        const mainElem = React.createElement('div', {className: 'App'}, [
            React.createElement('header', {className: "App-header", key: '0'}, null,[
                React.createElement('img', {src: logo,  className: "App-logo", alt: "logo" , key: '1'}),
                React.createElement('p', {key: '2'}, 'Edit src/App.js and save to reload. 2'),
                React.createElement('a', {
                    className: "App-link",
                href: "https://reactjs.org",
                target: "_blank",
                rel: "noopener noreferrer" , 
                key: '3'},
                "Learn React"
                ),
                React.createElement('p', {key: '4'}, getCurrentYear),
            ])
        ]);
        return mainElem
    }
}

// Используя функциональный подход
export const ClearJS = () => {
    return React.createElement('div', { className: 'App' , key: '0'},
        React.createElement('header', { className: "App-header", key: '1' }, [
            React.createElement('img', { src: logo, className: "App-logo", alt: "logo" , key: '2'}),
            React.createElement('p', { key: '3'}, 'Edit src/App.js and save to reload. 2'),
            React.createElement('a', {
                className: "App-link",
                href: "https://reactjs.org",
                target: "_blank",
                rel: "noopener noreferrer", 
                key: '4'
            },
                'Learn React'
            ),
            React.createElement('p', {key: '5'}, getCurrentYear)
        ])
    );
};

