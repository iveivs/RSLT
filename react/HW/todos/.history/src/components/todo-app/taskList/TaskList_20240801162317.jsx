import styles from './TaskList.module.css';
export const TaskList = () => {
	return (
		<div key={todo.id} className={styles.list_item}>
			<div className={styles.task_text}>{todo.task}</div>
			<div className={styles.list_item_status}>
				{todo.complited === 'true' ? 'выполнено ✅' : 'не выполнено ❌'}
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
	);
};
