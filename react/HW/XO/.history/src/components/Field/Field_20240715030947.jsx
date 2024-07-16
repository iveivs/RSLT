import styles from "./Field.module.css";

const FieldLayout = ({field}) => {
	console.log('field FLA', field);
	const allFileds = document.querySelectorAll(`.${styles.fieldItem}`)
	console.log('allFileds', allFileds);
	const handleClick = (e) => {
		console.log('CLICK', e.target);
		let currentElementDataIndex = e.target.dataset.index
		console.log('currentElementDataIndex', currentElementDataIndex);
		e.target.textContent = ``
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
const Field = ({field, isGameEnded, currentPlayer}) => {
	return <FieldLayout field={field} currentPlayer/>
}

export default Field
