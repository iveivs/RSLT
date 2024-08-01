import { useState, useEffect } from 'react';
// import './App.css';
import { TodosList } from './components/todosList/TodosList';
import { useRequestGetTodos } from './hooks/use-request-get-todos';
import { useRequestAddSomeTodo } from './hooks/use-request-add-some-todo';
import { useRequestUpdateTodo } from './hooks/use-request-update-todo';
import { Form } from './components/todo-app/Form';
import styles from './App.module.css'
function App() {
	const [input, setInput] = useState('');
	const [currentTodo, setCurrentTodo] = useState()
	// состояние обновления данных на странице
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
	// ф-я для обновления данных на странице
	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	const { isLoading, todos } = useRequestGetTodos(refreshProductsFlag);

	const { isCreating, requestAddSomeTodo } = useRequestAddSomeTodo(
		refreshProducts,
		input,
	);

	const { isUpdating, requestUpdateTodo } = useRequestUpdateTodo(refreshProducts, todos)

	const getCurrentId = () => {

	}

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
				todos.map(({ id, task, complited }) => (
					<div  key={id}>
						<p>task: {task} id: {id} {complited === 'true' ? '✅' : '❌'}</p>
						<button>Удалить</button>
						<button onClick={() => {requestUpdateTodo}>Поменять статус задачи</button>
					</div>
				))
			)}
		</>
	);
}

export default App;
