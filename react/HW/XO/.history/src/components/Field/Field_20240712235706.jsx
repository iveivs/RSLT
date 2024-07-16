import styles from "./Field.module.css";

const FieldLayout = () => {
	return (
		<>
			<p>THIS IS FIELD LAYOUT</p>
			<div className={styles.container}>
				<div className="fieldItem">1</div>
				<div className="fieldItem">2</div>
				<div className="fieldItem">3</div>
				<div className="fieldItem">4</div>
				<div className="fieldItem">5</div>
				<div className="fieldItem">6</div>
				<div className="fieldItem">7</div>
				<div className="fieldItem">8</div>
				<div className="fieldItem">9</div>
			</div>
		</>
	)
}
const Field = () => {
	return <FieldLayout  />
}

export default Field
