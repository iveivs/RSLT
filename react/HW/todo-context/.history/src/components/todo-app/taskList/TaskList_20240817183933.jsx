import { useContext } from 'react';
import { AppContext } from '../../../context';
import styles from './TaskList.module.css';
import { useRequestDeleteTask } from "./../../../";

export const TaskList = ({isLoading, requestUpdateTodo, fiindImput}) => {
	const stateForTodos = useContext(AppContext)
	const { requestDeleteTask } = useRequestDeleteTask(refreshTodos);
	return (
		<>
		{isLoading || stateForTodos.length === 0? (
			<div className="loader">Список дел пуст</div>
		) : (
			stateForTodos
			.filter((elem) => elem.task.toLowerCase().includes(fiindImput.toLowerCase()))
			.map((todo) => (
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
		</>
	);
};
