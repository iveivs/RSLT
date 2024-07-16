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

// const Field = ({ field, isGameEnded, currentPlayer, setCurrentPlayer, setField }) => {
// 	const handleClick = (e) => {
// 		console.log('FIELD 1', field);
// 		if (e.target.textContent === '' && !isGameEnded) {
// 			let currentElementDataIndex = Number(e.target.dataset.index);

// 			setField(prev => {
// 				const currentFieldArray = prev.map((elem, i) => {
// 					if (i === currentElementDataIndex) {
// 						return currentPlayer; // Изменение только необходимого элемента
// 					}
// 					return elem;
// 				});
// 				console.log('FIELD 2', field);
// 				return currentFieldArray;
// 			});
// 			console.log('FIELD 3', field);
// 			e.target.textContent = `${currentPlayer}`;
// 			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
// 		}
// 		console.log('FIELD', field);
// 	};

// 	return <FieldLayout field={field} handleClick={handleClick} />;
// };

const Field = ({ field, isGameEnded, currentPlayer, setCurrentPlayer, setField }) => {
	const handleClick = (e) => {
		if (e.target.textContent === '' && !isGameEnded) {
			let currentElementDataIndex = Number(e.target.dataset.index);
			const updateField = (prevField) => {
				const currentFieldArray = prevField.map((elem, i) => {
					if (i === currentElementDataIndex) {
						return currentPlayer; // Изменение только необходимого элемента
					}
					return elem;
				});
				console.log('FILED', currentFieldArray); // Логирование нового состояния
				return currentFieldArray;
			};

			setField(updateField);
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
