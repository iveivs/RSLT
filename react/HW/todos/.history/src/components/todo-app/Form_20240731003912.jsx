export const Form = () => {
	const [input, setIn]
	return (
		<form>
			<input type="text" />
			<button disabled={isCreating} onClick={requestAddSomeTodo}>
				Добавить задачу
			</button>
		</form>
	);
};
