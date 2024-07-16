const InformationLayout = ({isDraw, currentPlayer}) => {
	return (
		<>
			<p>THIS IS  InformationLayout</p>
			<p>Сейчас ходит: {currentPlayer}</p>
			{isDraw && <p>Ничья</p>}
			{!isDraw && isGameEnded && <p>`Победа: ${currentPlayer}`</p>}
			{/* {!isDraw && !isGameEnded && <p>`Ходит: ${currentPlayer}`</p>} */}
		</>
	)
}
const Information = ({isDraw, currentPlayer, isGameEnded}) => {
	return <InformationLayout  isDraw={isDraw} currentPlayer={currentPlayer} />
}

export default Information
