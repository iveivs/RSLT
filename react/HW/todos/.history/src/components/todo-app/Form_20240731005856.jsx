import { useState } from "react";

export const Form = () => {
	const [input, setInput] = useState('')

	const handleChange = (e) => {
        setInput(e.target.value)
    }

	const handleSubmit = (e) => {
		e.preventDefault()
		setInput(e.target.value)
	}
	return (
		<form  onSubmit={handleSubmit}>
			<input type="text" value={input} onChange={handleChange} />
			{/* <button disabled={isCreating} onClick={requestAddSomeTodo}> */}
			<button t>
				Добавить задачу
			</button>
		</form>
	);
};
