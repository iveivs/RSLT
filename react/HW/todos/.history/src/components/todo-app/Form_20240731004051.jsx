import { useState } from "react";

export const Form = () => {
	const [input, setInput] = useState('')
	return (
		<form onS>
			<input type="text" />
			<button disabled={isCreating} onClick={requestAddSomeTodo}>
				Добавить задачу
			</button>
		</form>
	);
};