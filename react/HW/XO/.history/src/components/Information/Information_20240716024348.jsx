import styles from './Information.module.css'
const InformationLayout = ({isDraw, currentPlayer, isGameEnded}) => {
	return (
		<>
			<div className={styles.info_container}>
			{isDraw && <p>Ничья</p>}
			{!isDraw && isGameEnded && <p>`Победа: {currentPlayer}`</p>}
			{!isDraw && !isGameEnded && <p className={styles.currentPlauer}>Сейчас xодит: {currentPlayer}</p>}
			</div>

		</>
	)
}
const Information = ({isDraw, currentPlayer, isGameEnded}) => {
	return <InformationLayout  isDraw={isDraw} currentPlayer={currentPlayer} isGameEnded={isGameEnded}/>
}

export default Information
