export const FormFind = ({ fiindImput, setFindInput}) => {
	return (
		<div>
			<input value={fiindImput} onChange={setFindInput} type="text" />
		</div>
	)
}
