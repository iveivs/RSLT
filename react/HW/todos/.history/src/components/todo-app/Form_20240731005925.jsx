import { useState } from "react";

export const Form = () => {
	const [input, setInput] = useState('')

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
			<input type="text" value={input} onChange={handleChange} />
			{/* <button disabled={isCreating} onClick={requestAddSomeTodo}> */}
			<button type="submit">
				Добавить задачу
			</button>
		</form>
	);
};
