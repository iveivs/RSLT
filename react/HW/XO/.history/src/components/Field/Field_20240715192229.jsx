import styles from './Field.module.css';



const FieldLayout = ({ field, handleClick }) => {
	return (
		<>
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
	const findAllIndexes = (arr, element) => {
		const indexes = [];
		arr.forEach((current, index) => {
			if (current === element) {
				indexes.push(index);
			}
		});
		return indexes;
	};

	const handleClick = (e) => {
		let currentFieldArray;
		if (e.target.textContent === '' && !isGameEnded) {
			let currentElementDataIndex = Number(e.target.dataset.index);
			currentFieldArray = field.map((elem, i) => {
				if (i === currentElementDataIndex) {
					elem = currentPlayer;
				}
				return elem;
			});
			setField(currentFieldArray);
			e.target.textContent = `${currentPlayer}`;
			currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
		}

		const findedElemIndexes = findAllIndexes(currentFieldArray, currentPlayer);
		console.log('currentPlayer', currentPlayer, 'findedElemIndexes', findedElemIndexes);
	};
	return <FieldLayout field={field} handleClick={handleClick} />;
};

export default Field;
