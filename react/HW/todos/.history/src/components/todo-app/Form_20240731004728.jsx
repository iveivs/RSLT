import { useState } from "react";

export const Form = () => {
	const [input, setInput] = useState('')

	const handlerSubmit = (e) => {
		e.preventDefault()
		console.log(e);
		console.log('input', input);
	}
	return (
		<form onSubmit={handlerSubmit}>
			<input type="text"  onChange={setInp} />
			{/* <button disabled={isCreating} onClick={requestAddSomeTodo}> */}
			<button>
				Добавить задачу
			</button>
		</form>
	);
};
