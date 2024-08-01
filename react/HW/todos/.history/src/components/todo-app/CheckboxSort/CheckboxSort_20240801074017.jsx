import styles from ''
export const CheckboxSort = () => {
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
