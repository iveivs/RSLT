import { useState } from "react";

export const Form = () => {
	const [input, setInput] = useState('')

	const handlerSubmit = (e) => {
		e.preventDefault()
		console.log(e);
	}
	return (
		<form onSubmit={handlerSubmit}>
			<input type="text"  onChange={setInput()} />
			{/* <button disabled={isCreating} onClick={requestAddSomeTodo}> */}
			<button>
				Добавить задачу
			</button>
		</form>
	);
};
