import styles from './FormFind.module.css'

export const FormFind = ({ fiindImput, setFindInput}) => {
	const handleChangeFormFind = (e) => {
		setFindInput(e.target.value)
		console.log('fiindImput', fiindImput);
	}
	return (
		<div>
			<input className={styles.find_input} value={fiindImput} onChange={handleChangeFormFind} type="text" placeholder="Поиск задачи" />
		</div>
	)
}
