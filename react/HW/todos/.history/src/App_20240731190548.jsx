import { useState, useEffect } from 'react';
// npx json-server src/db.json запуск сервера
import { TodosList } from './components/todosList/TodosList';
import { useRequestGetTodos } from './hooks/use-request-get-todos';
import { useRequestAddSomeTodo } from './hooks/use-request-add-some-todo';
import { useRequestUpdateTodo } from './hooks/use-request-update-todo';
import { Form } from './components/todo-app/Form';
import styles from './App.module.css';
function App() {
	const [input, setInput] = useState('');
	// const [currentTodo, setCurrentTodo] = useState()
	// состояние обновления данных на странице
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
	// ф-я для обновления данных на странице
	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	const { isLoading, todos } = useRequestGetTodos(refreshProductsFlag);

	const { isCreating, requestAddSomeTodo } = useRequestAddSomeTodo(
		refreshProducts,
		input,
	);

	const { requestUpdateTodo } = useRequestUpdateTodo(refreshProducts);

	// const getCurrentId = () => {

	// }

	return (
		<div className={styles.main}>
			<h1>Do it !</h1>
			{/* < TodosList /> первое задание */}
			<div className={styles.container_app}>
			<Form
				input={input}
				setInput={setInput}
				requestAddSomeTodo={requestAddSomeTodo}
			/>
			
			</div>
		</div>
	);
}

export default App;
