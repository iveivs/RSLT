import styles from './Information.module.css'
import { store } from '../../store'
const InformationLayout = ({isDraw, currentPlayer, isGameEnded}) => {
	return (
		<>
			<div className={styles.info_container}>
				{store.getState().isDraw && <p>Ничья</p>}
				{!store.getState().isDraw && store.getState().isGameEnded && <p className={styles.win}>`Победа: {store.getState().currentPlayer  === 'X' ? 'O' : 'X'}`</p>}
				{!store.getState().isDraw && !store.getState().isGameEnded && <p className={styles.currentPlauer}>cейчас xодит: {store.getState().currentPlayer}</p>}
			</div>

		</>
	)
}
const Information = () => {
	return <InformationLayout  isDraw={isDraw} currentPlayer={currentPlayer} isGameEnded={isGameEnded}/>
}

export default Information
