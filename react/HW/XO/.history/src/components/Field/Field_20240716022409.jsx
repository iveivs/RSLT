import styles from './Field.module.css';

const WIN_PATTERNS = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8],
	[0, 3, 6], [1, 4, 7], [2, 5, 8],
	[0, 4, 8], [2, 4, 6]
];

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
			<div className="cover_btn">
			<button className={styles.restartGameBtn}>Начать заново</button>
			</div>
		</>
	);
};
const Field = ({ field, isGameEnded, currentPlayer, setCurrentPlayer, setField, setIsGameEnded }) => {
	const findAllIndexes = (arr, element) => {
		const indexes = [];
		arr.forEach((current, index) => {
			if (current === element) {
				indexes.push(index);
			}
		});
		return indexes;
	};

	const containsPattern = (patterns, indexes) => {
		for (let pattern of patterns) {
			if (pattern.every(index => indexes.includes(index))) {
				return true;
			}
		}
		return false;
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
		
		let findedElemIndexes
		if(!isGameEnded) {
			findedElemIndexes = findAllIndexes(currentFieldArray, currentPlayer);
			console.log('currentPlayer', currentPlayer, 'findedElemIndexes', findedElemIndexes);
		}


		if(findedElemIndexes.length >= 3 && !isGameEnded){
			let isWin = containsPattern(WIN_PATTERNS, findedElemIndexes)
			if(isWin){
				setIsGameEnded(true)
				console.log('URRRRAAA');
			}
		}

	};
	return <FieldLayout field={field} handleClick={handleClick} />;
};

export default Field;
