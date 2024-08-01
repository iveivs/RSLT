import { useState } from "react";

export const Form = () => {
	const [input, setInput] = useState('')

	const handleChange = (e) => {
        setInput(e.target.value)
    }
	
	const handlerSubmit = (e) => {
		e.preventDefault()
		setInput(e.target.value)
	}
	return (
		<form>
			<input type="text" value={input} onChange={handleChange} />
			{/* <button disabled={isCreating} onClick={requestAddSomeTodo}> */}
			<button>
				Добавить задачу
			</button>
		</form>
	);
};
