// import PropTypes from 'prop-types';
import { useState } from 'react';
import Field from './components/Field/Field';
import Information from './components/Information/Information';
import styles from './App.module.css';
import { store } from './store';

const AppLayout = () => {
	return <></>;
};

const App = () => {
	return (
		<>
			<AppLayout />
			<Information />
			<Field />
		</>
	);
};

export default App;