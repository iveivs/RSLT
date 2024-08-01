import { useState } from "react";
import styles from './Form.module.css'
export const Form = ({input, setInput, requestAddSomeTodo}) => {


	const handleChange = (e) => {
        setInput(e.target.value)
    }

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("Форма отправлена с задачей:", input);
        setInput('');
	}

	return (
		<form  onSubmit={handleSubmit}>
			<input styles type="text" value={input} onChange={handleChange} placeholder='Введите новую задачу'/>
			<button disabled={!input} type="submit" onClick={requestAddSomeTodo}>
				Добавить задачу
			</button>
		</form>
	);
};
