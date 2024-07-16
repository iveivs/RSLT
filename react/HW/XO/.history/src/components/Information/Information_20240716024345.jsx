import styles from './Information.module.css'
const InformationLayout = ({isDraw, currentPlayer, isGameEnded}) => {
	return (
		<>
			<div className={styles.info_container}></div>

		</>
	)
}
const Information = ({isDraw, currentPlayer, isGameEnded}) => {
	return <InformationLayout  isDraw={isDraw} currentPlayer={currentPlayer} isGameEnded={isGameEnded}/>
}

export default Information
