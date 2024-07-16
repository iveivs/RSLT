const InformationLayout = ({isDraw, currentPlayer}) => {
	return (
		<>
			<p>THIS IS  InformationLayout</p>
			<p>Сейчас ходит: {currentPlayer}</p>
			{isDraw }
		</>
	)
}
const Information = ({isDraw, currentPlayer}) => {
	return <InformationLayout  isDraw={isDraw} currentPlayer={currentPlayer} />
}

export default Information
