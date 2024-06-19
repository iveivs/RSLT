import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Clear } from './clearJsAppComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Clear, {toWhat: 'Мир'}, null));
root.render(
  <React.StrictMode>
    <App 
    < Clear />
    />
    
  </React.StrictMode>
);