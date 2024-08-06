import styles from './TaskList.module.css';
export const TaskList = ({todos, isLoading, requestDeleteTask, requestUpdateTodo, fiindImput}) => {
	return (
		<>
		{isLoading || todos.length === 0? (
			<div className="loader">Список дел пуст</div>
		) : (
			todos
			.filter((elem) => elem.task.toLowerCase().includes(fiindImput.toLowerCase()))
			.map((todo) => (
				Lin
			))
		)}
		</>
	);
};
