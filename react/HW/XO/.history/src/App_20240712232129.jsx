import { useState } from 'react';
// import './App.css';
import Field from './components/Field/Field';
import Information from './components/Information/Information';
import styles from "./App.module.css";

const AppLayout = () => {
	return (
		<div>
			This is AppLayout
		</div>
	)
}

const App = ()=> {
	return (
		<>
			<div>XO</div>
			<AppLayout />
			< Information />
			<Field  />
		</>
	);
}

export default App;
