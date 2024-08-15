import styles from './Information.module.css'
import { store } from '../../store'
const InformationLayout = () => {
	let {currentPlayer, isDraw, isGameEnded} =  {...store.getState()}

	return (
		<>
			<div className={styles.info_container}>
				{isDraw && <p>Ничья</p>}
				{!isDraw && store.getState().isGameEnded && <p className={styles.win}>`Победа: {store.getState().currentPlayer  === 'X' ? 'O' : 'X'}`</p>}
				{!isDraw && !store.getState().isGameEnded && <p className={styles.currentPlauer}>cейчас xодит: {store.getState().currentPlayer}</p>}
			</div>

		</>
	)
}
const Information = () => {
	return <InformationLayout  />
}

export default Information
