import styles from "./Field.module.css";

const FieldLayout = ({field}) => {
	console.log('field FLA', field);
	const allFileds = document.querySelectorAll(`.${styles.fieldItem}`)
	console.log('allFileds', allFileds);
	const handleClick = ()
	return (
		<>
			<p className="itsp">THIS IS FIELD LAYOUT</p>
			<div className={styles.container}>
				{field.map((elem, i) => (
					<div onClick={() => {}} key={i} className={`${styles.fieldItem} ${styles.fieldItem + (i + 1)}`}></div>
						)
					)}
				{console.log('TEST')}
			</div>
		</>
	)
}
const Field = ({field, isGameEnded}) => {
	return <FieldLayout field={field} />
}

export default Field
