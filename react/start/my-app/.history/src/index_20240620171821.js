import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { ClearJS } from './clearJsAppComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(ClearJS));
root.render(
	<React.StrictMode>
		<App />
		< ClearJS />
	</React.StrictMode>
);
