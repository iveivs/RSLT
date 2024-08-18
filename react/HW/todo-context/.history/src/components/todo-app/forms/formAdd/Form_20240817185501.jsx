import { useContext } from 'react';
import styles from './Form.module.css';
import { useRequestAddSomeTodo } from "./../../../../hooks";
import { AppContext } from '../../../../context';


export const Form = ({ input, setInput }) => {
	const { refreshTodos} = useContext(AppContext)
	const { requestAddSomeTodo } = useRequestAddSomeTodo(
        refreshTodos,
        input
    );
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setInput('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className={styles.task_input}
				type="text"
				value={input}
				onChange={handleChange}
				placeholder="Введите новую задачу"
			/>
			<br />
			<button
				className={styles.form_button}
				disabled={!input}
				type="submit"
				onClick={requestAddSomeTodo}
			>
				Добавить задачу
			</button>
		</form>
	);
};
