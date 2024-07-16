import { useState } from 'react';
// import './App.css';
import Field from './components/Field/Field';
import Information from './components/Information/Information';
import styles from "./App.module.css";

const AppLayout = () => {
	return (
		<>
		</>
	)
}

const App = ()=> {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(['', '', '','', '', '','', '', '',])
	return (
		<>
			<AppLayout />
			< Information isDraw={isDraw} currentPlayer={currentPlayer} isGameEnded={isGameEnded}/>
			<Field field={field} isGameEnded={isGameEnded} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} setField={setField}  />
		</>
	);
}

export default App;
