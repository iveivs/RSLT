export const FormFind = ({ fiindImput, setFindInput}) => {
	const handleChangeFormFind = (e) => {
		setFindInput(e.target.value)
		console.log('fiindImput');
	}
	return (
		<div>
			<input value={fiindImput} onChange={handleChangeFormFind} type="text" />
		</div>
	)
}
