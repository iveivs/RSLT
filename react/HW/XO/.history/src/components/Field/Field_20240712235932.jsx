import styles from "./Field.module.css";

const FieldLayout = () => {
	return (
		<>
			<p>THIS IS FIELD LAYOUT</p>
			<div className={styles.container}>
				<div className={styles}>1</div>
				<div className={styles}>2</div>
				<div className={styles}>3</div>
				<div className={styles}>4</div>
				<div className={styles}>5</div>
				<div className={styles}>6</div>
				<div className={styles}>7</div>
				<div className={styles}>8</div>
				<div className={styles}>9</div>
			</div>
		</>
	)
}
const Field = () => {
	return <FieldLayout  />
}

export default Field
