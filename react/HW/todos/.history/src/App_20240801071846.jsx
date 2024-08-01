import { useState, useEffect } from 'react';
// npx json-server src/db.json запуск сервера
import { TodosList } from './components/todosList/TodosList';
import { useRequestGetTodos } from './hooks/use-request-get-todos';
import { useRequestAddSomeTodo } from './hooks/use-request-add-some-todo';
import { useRequestUpdateTodo } from './hooks/use-request-update-todo';
import { useRequestDeleteTask } from './hooks/use-request-delete-task';
import { Form } from './components/todo-app/Form';
import styles from './App.module.css';
function App() {
	const [input, setInput] = useState('');
	const [isChecked, setIsChecked] = useState(false);
	// const [currentTodo, setCurrentTodo] = useState()
	// состояние обновления данных на странице
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
	// ф-я для обновления данных на странице
	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	let { isLoading, todos } = useRequestGetTodos(refreshProductsFlag);

	const { isCreating, requestAddSomeTodo } = useRequestAddSomeTodo(
		refreshProducts,
		input,
	);

	const { isDeleting, requestDeleteTask } = useRequestDeleteTask(refreshProducts);

	const { requestUpdateTodo } = useRequestUpdateTodo(refreshProducts);

	const handleCheckboxChange = (event) => {
		console.log('event.target.checked', event.target.checked);
		setIsChecked(event.target.checked);
	};

	let newTodos = [...todos];

	let sortedTodos = newTodos.toSorted((a, b) => a.task.localeCompare(b.task));
	console.log('sortedTodos', sortedTodos);

	isChecked ? todos = sortedTodos : todos = todos

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
				<div className={styles.task_list}>
					<div className={styles.checkbox_container}>
						<span className={styles.span_checkboxText}>
							Сортировать по алфавиту
						</span>
						<input
							className={styles.sort_checkbox}
							checked={isChecked}
							onChange={handleCheckboxChange}
							type="checkbox"
						/>
					</div>
					{isLoading ? (
						<div className="loader"></div>
					) : (
						todos.map((todo) => (
							<div key={todo.id} className={styles.list_item}>
								<div className={styles.task_text}>{todo.task}</div>
								<div className={styles.list_item_status}>
									{todo.complited === 'true'
										? 'выполнено ✅'
										: 'не выполнено ❌'}
								</div>
								<button
									className={styles.list_btn}
									onClick={() => {
										requestDeleteTask(todo);
									}}
								>
									Удалить
								</button>
								<button
									onClick={() => {
										requestUpdateTodo(todo);
									}}
									className={styles.list_btn}
								>
									Поменять статус задачи
								</button>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
