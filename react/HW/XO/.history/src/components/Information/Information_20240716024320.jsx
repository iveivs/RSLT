import styles from './Information.module.css'
const InformationLayout = ({isDraw, currentPlayer, isGameEnded}) => {
	return (
		<>
			{/* <p>THIS IS  InformationLayout</p> */}
			{/* <p>Сейчас ходит: {currentPlayer}</p> */}
			
		</>
	)
}
const Information = ({isDraw, currentPlayer, isGameEnded}) => {
	return <InformationLayout  isDraw={isDraw} currentPlayer={currentPlayer} isGameEnded={isGameEnded}/>
}

export default Information
