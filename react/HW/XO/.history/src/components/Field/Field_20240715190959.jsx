import styles from './Field.module.css';

const FieldLayout = ({ field, handleClick }) => {
	// const allFileds = document.querySelectorAll(`.${styles.fieldItem}`)

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
			// console.log('FILED', field);
			// console.log('currentFieldArray', currentFieldArray);
			e.target.textContent = `${currentPlayer}`;
			currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
		}
		const findAllIndexes = (arr, element) => {
			const indexes = [];
			arr.forEach((current, index) => {
				if (current === element) {
					indexes.push(index);
				}
			});
			return indexes;
		};
		const findedElemIndexes = findAllIndexes(currentFieldArray, currentPlayer)
		console.log('findedElemIndexes');
	};
	return <FieldLayout field={field} handleClick={handleClick} />;
};

export default Field;
