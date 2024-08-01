import { useState } from "react";

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
			<input type="text" value={input} onChange={handleChange} placeholder='Введите новую задачу'/>
			<button  type="submit" onClick={requestAddSomeTodo}>
				Добавить задачу
			</button>
		</form>
	);
};
