import styles from "./Field.module.css";

const FieldLayout = ({field}) => {
	console.log('field FLA', field);
	const allFileds = document.querySelectorAll(`.${styles.fieldItem}`)
	console.log('allFileds', allFileds);

	return (
		<>
			<p className="itsp">THIS IS FIELD LAYOUT</p>
			<div className={styles.container}>
				{/* <div className={`${styles.fieldItem} ${styles.fieldItem1}`}></div>
				<div className={`${styles.fieldItem} ${styles.fieldItem9}`}></div> */}
				{field.map((elem, i) => (
					<div key={i} className={`${styles.fieldItem} ${styles.fieldItem + (i + 1)}`}></div>
						)
					)}
				{/* {const itsp = document.querySelector('.itsp') console.log('itsp', itsp)} */}
				{console.log('TEST')}
			</div>
		</>
	)
}
const Field = ({field, isGameEnded}) => {
	return <FieldLayout field={field} />
}

export default Field
