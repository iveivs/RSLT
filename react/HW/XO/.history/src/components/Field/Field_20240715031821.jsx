import styles from "./Field.module.css";

const FieldLayout = ({field, currentPlayer}) => {
	// const allFileds = document.querySelectorAll(`.${styles.fieldItem}`)
	
	return (
		<>
			<p className="itsp">THIS IS FIELD LAYOUT</p>
			<div className={styles.container}>
				{field.map((elem, i) => (
					<div onClick={(e) => handleClick(e)} data-index={i} key={i} className={`${styles.fieldItem} ${styles.fieldItem + (i + 1)}`}></div>
						)
					)}
			</div>
		</>
	)
}
const Field = ({field, isGameEnded, currentPlayer, setCurrentPlayer}) => {
	return <FieldLayout field={field} currentPlayer={currentPlayer} />
}

export default Field
