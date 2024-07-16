import styles from "./Field.module.css";

const FieldLayout = ({field}) => {
	console.log('field FLA', field);
	const allFileds = document.querySelectorAll(`.${styles.fieldItem}`)
	console.log('allFileds', allFileds);
	return (
		<>
			<p >THIS IS FIELD LAYOUT</p>
			<div className={styles.container}>
				{/* <div className={`${styles.fieldItem} ${styles.fieldItem1}`}></div>
				<div className={`${styles.fieldItem} ${styles.fieldItem2}`}></div>
				<div className={`${styles.fieldItem} ${styles.fieldItem3}`}></div>
				<div className={`${styles.fieldItem} ${styles.fieldItem4}`}></div>
				<div className={`${styles.fieldItem} ${styles.fieldItem5}`}></div>
				<div className={`${styles.fieldItem} ${styles.fieldItem6}`}></div>
				<div className={`${styles.fieldItem} ${styles.fieldItem7}`}></div>
				<div className={`${styles.fieldItem} ${styles.fieldItem8}`}></div>
				<div className={`${styles.fieldItem} ${styles.fieldItem9}`}></div> */}
				{field.map((elem, i) => (
					// <div key={i} className={`${styles.fieldItem}` `${styles.fieldItem + i}`}></div>
					<div key={i} className={`${styles.fieldItem} ${styles.fieldItem + (i + 1)}`}></div>
						)
					)}
			</div>
		</>
	)
}
const Field = ({field, isGameEnded}) => {
	return <FieldLayout field={field} />
}

export default Field
