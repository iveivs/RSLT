import { useState, useEffect } from 'react';
import './App.css';
import { TodosList } from './components/todosList/TodosList';
import { JSON_SERVER_LINK } from './constants/link-json-server';
function App() {
	// состояние обновления данных на странице
    const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
	// ф-я для обновления данных на странице
    const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);
	useEffect(() => {

	},[])
	return (
		<>
			<h1>Todos</h1>
			{/* < TodosList /> */}
		</>
	);
}

export default App;
