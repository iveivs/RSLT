import { useState } from "react";

export const Form = () => {
	const [input, setInput] = useState('')

	const handlerSubmit = (e) => {
		e.preventDefault()
		console.log(e);
		se
		console.log('input', input);

	}
	return (
		<form>
			<input type="text" value={input} onChange={handlerSubmit} />
			{/* <button disabled={isCreating} onClick={requestAddSomeTodo}> */}
			<button>
				Добавить задачу
			</button>
		</form>
	);
};