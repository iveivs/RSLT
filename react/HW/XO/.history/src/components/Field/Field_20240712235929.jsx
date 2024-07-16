import styles from "./Field.module.css";

const FieldLayout = () => {
	return (
		<>
			<p>THIS IS FIELD LAYOUT</p>
			<div className={styles.container}>
				<div className={}>1</div>
				<div className={}>2</div>
				<div className={}>3</div>
				<div className={}>4</div>
				<div className={}>5</div>
				<div className={}>6</div>
				<div className={}>7</div>
				<div className={}>8</div>
				<div className={}>9</div>
			</div>
		</>
	)
}
const Field = () => {
	return <FieldLayout  />
}

export default Field
