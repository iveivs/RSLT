import styles from './CheckboxSort.module.css'
export const CheckboxSort = ({isChecked, }) => {
	const handleCheckboxChange = (event) => {
		console.log('event.target.checked', event.target.checked);
		setIsChecked(event.target.checked);
	};
	return (
		<div className={styles.checkbox_container}>
			<span className={styles.span_checkboxText}>Сортировать по алфавиту</span>
			<input
				className={styles.sort_checkbox}
				checked={isChecked}
				onChange={handleCheckboxChange}
				type="checkbox"
			/>
		</div>
	);
};
