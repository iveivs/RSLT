// import styles from './Information.module.css'
// import { store } from '../../store'
// let {currentPlayer, isDraw, isGameEnded} =  {...store.getState()}
// const InformationLayout = () => {
	

// 	return (
// 		<>
// 			<div className={styles.info_container}>
// 				{isDraw && <p>Ничья</p>}
// 				{!isDraw && isGameEnded && <p className={styles.win}>`Победа: {currentPlayer  === 'X' ? 'O' : 'X'}`</p>}
// 				{!isDraw && !isGameEnded && <p className={styles.currentPlauer}>cейчас xодит: {currentPlayer}</p>}
// 			</div>

// 		</>
// 	)
// }
// const Information = () => {
// 	return <InformationLayout  />
// }

// export default Information
// ===================================
import styles from './Information.module.css'
import { store } from '../../store'
// let {currentPlayer, isDraw, isGameEnded} =  {...store.getState()}
const InformationLayout = () => {
	

	return (
		<>
			<div className={styles.info_container}>
				{isDraw && <p>Ничья</p>}
				{!isDraw && isGameEnded && <p className={styles.win}>`Победа: {currentPlayer  === 'X' ? 'O' : 'X'}`</p>}
				{!isDraw && !isGameEnded && <p className={styles.currentPlauer}>cейчас xодит: {currentPlayer}</p>}
			</div>

		</>
	)
}
const Information = () => {
	return <InformationLayout  />
}

export default Information
