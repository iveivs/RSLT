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
// const Field = ({ field, isGameEnded, currentPlayer, setCurrentPlayer , setField}) => {
// 	const handleClick = (e) => {
// 		// console.log('txtCont', typeof e.target.textContent);

// 		if (e.target.textContent === '' && !isGameEnded) {
// 			let currentElementDataIndex = Number(e.target.dataset.index)
// 			const currentFieldArray = field.map((elem, i) => {
// 				if(i === currentElementDataIndex){
// 					elem = currentPlayer
// 				}
// 				return elem
// 			})
// 			setField(currentFieldArray)
// 			console.log('FILED', field);
// 			e.target.textContent = `${currentPlayer}`;
// 			currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
// 		}

// 	};
// 	return <FieldLayout field={field} handleClick={handleClick} />;
// };\
const Field = ({ field, isGameEnded, currentPlayer, setCurrentPlayer, setField }) => {
	const handleClick = (e) => {
		if (e.target.textContent === '' && !isGameEnded) {
			let currentElementDataIndex = Number(e.target.dataset.index);
			const currentFieldArray = field.map((elem, i) => {
				if (i === currentElementDataIndex) {
					return currentPlayer; // Изменение только необходимого элемента
				}
				return elem;
			});
			setField(currentFieldArray);
			console.log('FILED', currentFieldArray); // Логирование нового состояния
			console.log('FILED', currentFieldArray)
			e.target.textContent = `${currentPlayer}`;
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}
	};
	return <FieldLayout field={field} handleClick={handleClick} />;
};

export default Field;
