import { useState, useEffect } from 'react';
// import './App.css';
import { TodosList } from './components/todosList/TodosList';
import { useRequestGetTodos } from './hooks/use-request-get-todos';
import { useRequestAddSomeTodo } from './hooks/use-request-add-some-todo';
import { Form } from './components/todo-app/Form';
import styles from './App.module.css'
function App() {
	const [input, setInput] = useState('');
	// состояние обновления данных на странице
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
	// ф-я для обновления данных на странице
	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	const { isLoading, todos } = useRequestGetTodos(refreshProductsFlag);

	const { isCreating, requestAddSomeTodo } = useRequestAddSomeTodo(
		refreshProducts,
		input,
	);

	return (
		<>
			<h1>Todos</h1>
			{/* < TodosList /> первое задание */}
			<Form
				input={input}
				setInput={setInput}
				requestAddSomeTodo={requestAddSomeTodo}
			/>
			{isLoading ? (
				<div className="loader"></div>
			) : (
				todos.map(({ id, task, completed }) => (
					<div  key={id}>
						<p>task: {task} id: {id} {completed  ? '✅' : '❌'}</p>
						<button>Удалить</button>
					</div>
				))
			)}
		</>
	);
}

export default App;
