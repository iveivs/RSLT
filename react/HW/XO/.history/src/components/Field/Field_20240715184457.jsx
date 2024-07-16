import styles from './Field.module.css';

const FieldLayout = ({ field, handleClick }) => {
	return (
		<>
			<p className="itsp">THIS IS FIELD LAYOUT</p>
			<div className={styles.container}>
				{field.map((elem, i) => (
					<div
						onClick={(e) => handleClick(e)}
						data-index={i}
						key={i}
						className={`${styles.fieldItem} ${styles.fieldItem + (i + 1)}`}
					></div>
				))}
			</div>
		</>
	);
};

const Field = ({ field, isGameEnded, currentPlayer, setCurrentPlayer, setField }) => {
	const handleClick = (e) => {
		console.log('FIELD', field);
		if (e.target.textContent === '' && !isGameEnded) {
			let currentElementDataIndex = Number(e.target.dataset.index);

			setField(prev => {
				const currentFieldArray = prev.map((elem, i) => {
					if (i === currentElementDataIndex) {
						return currentPlayer; // Изменение только необходимого элемента
					}
					return elem;
				});
				return currentFieldArray;
			});
			e.target.textContent = `${currentPlayer}`;
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}
	};

	return <FieldLayout field={field} handleClick={handleClick} />;
};

export default Field;











// const updateField = (prevField) => {
// 	const currentFieldArray = prevField.map((elem, i) => {
// 		if (i === currentElementDataIndex) {
// 			return currentPlayer; // Изменение только необходимого элемента
// 		}
// 		return elem;
// 	});
// 	console.log('FILED', currentFieldArray); // Логирование нового состояния
// 	return currentFieldArray;
// };

// setField(updateField);
// ==================
