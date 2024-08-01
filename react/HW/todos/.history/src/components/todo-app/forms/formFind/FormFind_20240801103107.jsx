export const FormFind = ({ fiindImput, setFindInput}) => {
	const handleChangeFormFind = (e) => {
		setFindInput(e.target.value)
	}
	return (
		<div>
			<input value={fiindImput} onChange={handleChangeFormFind} type="text" />
		</div>
	)
}
