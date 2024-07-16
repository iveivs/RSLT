import styles from "./Field.module.css";

const FieldLayout = () => {
	return (
		<>
			<p>THIS IS FIELD LAYOUT</p>
			<div className={styles.container}>
				<div className={st}>1</div>
				<div className={st}>2</div>
				<div className={st}>3</div>
				<div className={st}>4</div>
				<div className={st}>5</div>
				<div className={st}>6</div>
				<div className={st}>7</div>
				<div className={st}>8</div>
				<div className={st}>9</div>
			</div>
		</>
	)
}
const Field = () => {
	return <FieldLayout  />
}

export default Field
