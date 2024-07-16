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
				<div className="fieldItem"></div>
				<div className="fieldItem"></div>
				<div className="fieldItem"></div>
				<div className="fieldItem"></div>
				<div className="fieldItem"></div>
			</div>
		</>
	)
}
const Field = () => {
	return <FieldLayout  />
}

export default Field
