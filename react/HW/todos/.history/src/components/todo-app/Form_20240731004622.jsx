import { useState } from "react";

export const Form = () => {
	const [input, setInput] = useState('')

	const handlerSubmit = (e) => {
		e.preventDefault()
		console.log(e);
		console.log('');
	}
	return (
		<form onSubmit={handlerSubmit}>
			<input type="text" value={input} onChange={setInput(input)} />
			{/* <button disabled={isCreating} onClick={requestAddSomeTodo}> */}
			<button>
				Добавить задачу
			</button>
		</form>
	);
};
