import styles from "./Field.module.css";

const FieldLayout = () => {
	return (
		<>
			<p>THIS IS FIELD LAYOUT</p>
			<div className={styles.container}>
				<div className={styles.fieldItem}></div>
				<div className={styles.fieldItem}></div>
				<div className={styles.fieldItem}></div>
				<div className={styles.fieldItem}></div>
				<div className={styles.fieldItem}></div>
				<div className={styles.fieldItem}></div>
				<div className={styles.fieldItem}>7</div>
				<div className={styles.fieldItem}>8</div>
				<div className={styles.fieldItem}>9</div>
			</div>
		</>
	)
}
const Field = () => {
	return <FieldLayout  />
}

export default Field
