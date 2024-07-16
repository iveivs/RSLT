const InformationLayout = ({isDraw, currentPlayer, isGameEnded}) => {
	return (
		<>
			{/* <p>THIS IS  InformationLayout</p> */}
			{/* <p>Сейчас ходит: {currentPlayer}</p> */}
			{isDraw && <p>Ничья</p>}
			{!isDraw && isGameEnded && <p>`Побед: {currentPlayer}`</p>}
			{!isDraw && !isGameEnded && <p>`Сейчас xодит: {currentPlayer}`</p>}
		</>
	)
}
const Information = ({isDraw, currentPlayer, isGameEnded}) => {
	return <InformationLayout  isDraw={isDraw} currentPlayer={currentPlayer} isGameEnded={isGameEnded}/>
}

export default Information
