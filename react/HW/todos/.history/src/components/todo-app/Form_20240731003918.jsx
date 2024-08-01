export const Form = () => {
	const [input, setInput] = use
	return (
		<form>
			<input type="text" />
			<button disabled={isCreating} onClick={requestAddSomeTodo}>
				Добавить задачу
			</button>
		</form>
	);
};
