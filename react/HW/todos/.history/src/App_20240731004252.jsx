import { useState, useEffect } from 'react';
import './App.css';
import { TodosList } from './components/todosList/TodosList';
import { JSON_SERVER_LINK } from './constants/link-json-server';
import { useRequestGetTodos } from './hooks/use-request-get-todos';
import { useRequestAddSomeTodo } from './hooks/use-request-add-some-todo';
import For
function App() {
	// состояние обновления данных на странице
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
	// ф-я для обновления данных на странице
	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	const { isLoading, todos } = useRequestGetTodos(refreshProductsFlag);

	const { isCreating, requestAddSomeTodo } = useRequestAddSomeTodo(refreshProducts);

	return (
		<>
			<h1>Todos</h1>
			{/* < TodosList /> первое задание */}

			{isLoading ? (
				<div className="loader"></div>
			) : (
				todos.map(({ id, task }) => <div key={id}>task: {task}</div>)
			)}
		</>
	);
}

export default App;
