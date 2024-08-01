import styles from './FormFind.module'

export const FormFind = ({ fiindImput, setFindInput}) => {
	const handleChangeFormFind = (e) => {
		setFindInput(e.target.value)
		console.log('fiindImput', fiindImput);
	}
	return (
		<div>
			<input className={styles.} value={fiindImput} onChange={handleChangeFormFind} type="text" placeholder="Поиск задачи" />
		</div>
	)
}
