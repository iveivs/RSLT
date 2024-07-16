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
const Field = ({ field, isGameEnded, currentPlayer, setCurrentPlayer }) => {
	const handleClick = (e) => {
		console.log('txtCont', typeof e.target.textContent);
		const currentFieldArray = field.map((elem, i) => {
			if()
		})
		if (e.target.textContent === '' && !isGameEnded) {
			let currentElementDataIndex = e.target.dataset.index;
			e.target.textContent = `${currentPlayer}`;
			currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
		}

	};
	return <FieldLayout field={field} handleClick={handleClick} />;
};

export default Field;
