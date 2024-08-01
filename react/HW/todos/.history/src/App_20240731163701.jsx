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
		<div className={styles.}>
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
				todos.map((todo) => (
					<div key={todo.id}>
						<div>
							<p>task: {todo.task} </p>
							<div>
								{todo.complited === 'true'
									? 'выполнено ✅'
									: 'не выполнено ❌'}
							</div>
						</div>
						<button>Удалить</button>
						<button
							onClick={() => {
								requestUpdateTodo(todo);
							}}
						>
							Поменять статус задачи
						</button>
					</div>
				))
			)}
		</div>
	);
}

export default App;
