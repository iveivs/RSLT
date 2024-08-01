import { useState } from 'react';
import './App.css';
import { todosList } from './components/todosList/TodosList';
function App() {

	return (
		<>
			<h1>Todos</h1>
			< todosList />
		</>
	);
}

export default App;
