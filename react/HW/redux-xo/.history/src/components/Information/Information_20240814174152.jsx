import styles from './Information.module.css'
import { store } from '../../store'
const InformationLayout = () => {
	let {currentPlauer, isDraw, isGameEnded} =  store.getState()
	console.log('currentPlauer',currentPlauer);
	console.log('cur player without destructn', );
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
	return <InformationLayout  />
}

export default Information
