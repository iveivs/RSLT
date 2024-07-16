const InformationLayout = () => {
	return (
		<>
			<p>THIS IS  InformationLayout</p>
		</>
	)
}
const Information = ({isDraw, currentPlayer}) => {
	return <InformationLayout  isDraw={isDraw} currentPlayer={currentPlayer} />
}

export default Information
