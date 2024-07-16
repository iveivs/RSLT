import styles from "./Field.module.css";

const FieldLayout = ({field, currentPlayer}) => {
	console.log('field FLA', field);
	const allFileds = document.querySelectorAll(`.${styles.fieldItem}`)
	console.log('allFileds', allFileds);
	const handleClick = (e) => {

		let currentElementDataIndex = e.target.dataset.index
		console.log('currentElementDataIndex', currentElementDataIndex);
		e.target.textContent = `${currentPlayer}`
	}
	return (
		<>
			<p className="itsp">THIS IS FIELD LAYOUT</p>
			<div className={styles.container}>
				{field.map((elem, i) => (
					<div onClick={(e) => handleClick(e)} data-index={i} key={i} className={`${styles.fieldItem} ${styles.fieldItem + (i + 1)}`}></div>
						)
					)}
				{console.log('TEST')}
			</div>
		</>
	)
}
const Field = ({field, isGameEnded, currentPlayer, setCurrentPlayer}) => {
	return <FieldLayout field={field} currentPlayer={currentPlayer} />
}

export default Field
