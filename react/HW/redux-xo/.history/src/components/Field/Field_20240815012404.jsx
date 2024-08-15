import styles from './Field.module.css';
import { store } from '../../store';
import { WIN_PATTERNS } from '../../constants/winPatterns';


// console.log('STOR OUT OF COMPONENT FIELD', field);

const FieldLayout = ({ handleClick, restartGame }) => {
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
				<button onClick={restartGame} className={styles.restartGameBtn}>
					Начать заново
				</button>
			</div>
		</>
	);
};

const Field = () => {
	let { currentPlayer, isGameEnded, isDraw, field } = {...store.getState()}
	if(!field.some(elem => elem === '')){
		console.log('IS_DRAW');
		store.dispatch({type: 'SET_IS_DRAW', payload: true})
	}
	const restartGame = () => {
		store.dispatch({type: 'RESTART_GAME'})
		// const allFields = document.querySelectorAll(`.${styles.fieldItem}`);
		// allFields.forEach((elem) => (elem.textContent = ''));
	};
	// функция для поиска индексов ходов текущего игрока и записи их в массив
	const findAllIndexes = (arr, element) => {
		const indexes = [];
		arr.forEach((current, index) => {
			if (current === element) {
				indexes.push(index);
			}
		});
		return indexes;
	};
	// функция для проверки победных паттернов в текущем массиве игрока, который ходит
	const containsPattern = (patterns, indexes) => {
		for (let pattern of patterns) {
			if (pattern.every((index) => indexes.includes(index))) {
				return true;
			}
		}
		return false;
	};
	// функция отслеживающая действия игроков и управления логикой игры
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

			store.dispatch({type: 'SET_FIELD', payload: currentFieldArray});
			// ==================================
			console.log('currentFieldArray', currentFieldArray);
			console.log('store field', store.getState().field);

			
			e.target.textContent = `${currentPlayer}`;

			const findedElemIndexes = findAllIndexes(currentFieldArray, currentPlayer);

			let isWin = containsPattern(WIN_PATTERNS, findedElemIndexes);
			if (isWin) {
				store.dispatch({type: 'SET_GAME_END', payload: true})
				console.log('WIN' , store.getState().isGameEnded);
			}

			currentPlayer === 'X' ? store.dispatch({type: 'SET_CURRENT_PLAYER',  payload: 'O'}) : store.dispatch({type: 'SET_CURRENT_PLAYER',  payload: 'X'});
			console.log('CUR PLAUER', store.getState().currentPlayer);
		}

	};
	return (
		<FieldLayout field={}  handleClick={handleClick} restartGame={restartGame} />
	);
};

export default Field;

