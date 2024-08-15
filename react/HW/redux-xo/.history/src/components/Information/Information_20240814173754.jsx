import styles from './Information.module.css'
import { store } from '../../store'
const InformationLayout = ({isDraw, currentPlayer, isGameEnded}) => {
	return (
		<>
			<div className={styles.info_container}>
				{store.getState().isDraw && <p>Ничья</p>}
				{!store.getState().isDraw && store.getState().isGameEnded && <p className={styles.win}>`Победа: {currentPlayer  === 'X' ? 'O' : 'X'}`</p>}
				{!isDraw && !isGameEnded && <p className={styles.currentPlauer}>cейчас xодит: {currentPlayer}</p>}
			</div>

		</>
	)
}
const Information = ({isDraw, currentPlayer, isGameEnded}) => {
	return <InformationLayout  isDraw={isDraw} currentPlayer={currentPlayer} isGameEnded={isGameEnded}/>
}

export default Information
