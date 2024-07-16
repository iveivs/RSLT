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
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(['', '', '','', '', '','', '', '',])
	return (
		<>
			<div>XO</div>
			<AppLayout />
			< Information />
			<Field field={field} isGameEnded= />
		</>
	);
}

export default App;
