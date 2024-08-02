import { useState, useEffect } from 'react';
// npx json-server src/db.json запуск сервера
// import { TodosList } from './components/todosList/TodosList'; ПЕРВОЕ ЗАДАНИЕ
import {useRequestGetTodos, useRequestAddSomeTodo, useRequestUpdateTodo, useRequestDeleteTask} from './hooks/'
import { Form } from './components/todo-app/forms/formAdd/Form';
import { FormFind } from './components/todo-app/forms/formFind/FormFind';
import { CheckboxSort } from './components/todo-app/CheckboxSort/CheckboxSort';
import { TaskList } from './components/todo-app/taskList/TaskList';
import styles from './App.module.css';
function App() {
	const [input, setInput] = useState('');
	const [isChecked, setIsChecked] = useState(false);
	const [fiindImput, setFindInput] = useState('')
	// состояние обновления данных на странице
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	// ф-я для обновления данных на странице
	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	let { isLoading, todos } = useRequestGetTodos();

	const { isCreating, requestAddSomeTodo } = useRequestAddSomeTodo(input);

	const { isDeleting, requestDeleteTask } = useRequestDeleteTask(refreshTodos);

	const { requestUpdateTodo } = useRequestUpdateTodo(refreshTodos);
	// клонируем список
	
	let newTodos = [...todos];

	let sortedTodos = newTodos.toSorted((a, b) => a.task.localeCompare(b.task));

	isChecked ? todos = sortedTodos : todos = todos

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
					< TaskList todos={todos} isLoading={isLoading} requestDeleteTask={requestDeleteTask} requestUpdateTodo={requestUpdateTodo} fiindImput={fiindImput}/>
				</div>
			</div>
		</div>
	);
}

export default App;
