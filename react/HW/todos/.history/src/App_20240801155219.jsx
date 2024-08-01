import { useState, useEffect } from 'react';
// npx json-server src/db.json запуск сервера
import { TodosList } from './components/todosList/TodosList';
import {useRequestGetTodos, useRequestAddSomeTodo, useRequestUpdateTodo, useRequestDeleteTask} from './hooks/'
import { Form } from './components/todo-app/forms/formAdd/Form';
import { FormFind } from './components/todo-app/forms/formFind/FormFind';
import { CheckboxSort } from './components/todo-app/CheckboxSort/CheckboxSort';
import styles from './App.module.css';
function App() {
	const [input, setInput] = useState('');
	const [isChecked, setIsChecked] = useState(false);
	const [fiindImput, setFindInput] = useState('')
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

	let newTodos = [...todos];

	let sortedTodos = newTodos.toSorted((a, b) => a.task.localeCompare(b.task));

	isChecked ? todos = sortedTodos : todos = todos

	const findTask = () => {
		
	}

	return (
		<div className={styles.main}>
			<h1>Do it !</h1>
			{/* < TodosList /> первое задание */}
			<div className={styles.container_app}>
				<div className={styles.forms_container}>
					<Form
						input={input}
						setInput={setInput}
						requestAddSomeTodo={requestAddSomeTodo}
					/>
					< FormFind fiindImput={fiindImput} setFindInput={setFindInput} />
				</div>
				<div className={styles.task_list}>
					< CheckboxSort isChecked={isChecked} setIsChecked={setIsChecked} />
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
