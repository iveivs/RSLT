import styles from "./Field.module.css";

const FieldLayout = () => {
	return (
		<>
			<p>THIS IS FIELD LAYOUT</p>
			<div className={styles.container}>
				.fieldItem
			</div>
		</>
	)
}
const Field = () => {
	return <FieldLayout  />
}

export default Field
