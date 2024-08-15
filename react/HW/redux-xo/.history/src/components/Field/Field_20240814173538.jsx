// import PropTypes from 'prop-types';
import styles from './Field.module.css';
import { store } from '../../store';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const FieldLayout = ({ field, handleClick, restartGame }) => {
	return (
		<>
			<div className={styles.container}>
				{store.getState().field.map((elem, i) => (
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
	console.log('STORE 1', store.getState());
	if(!store.getState().field.some(elem => elem === '')){
		store.dispatch({type: 'SET_IS_DRAW', payload: true})
	}
	const restartGame = () => {
		store.dispatch({type: 'RESTART_GAME'})
		const allFields = document.querySelectorAll(`.${styles.fieldItem}`);
		allFields.forEach((elem) => (elem.textContent = ''));
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
		if (e.target.textContent === '' && !store.getState().isGameEnded) {
			let currentElementDataIndex = Number(e.target.dataset.index);
			currentFieldArray = store.getState().field.map((elem, i) => {
				if (i === currentElementDataIndex) {
					elem = store.getState().currentPlayer;
				}
				return elem;
			});

			store.dispatch({type: 'SET_FIELD', payload: currentFieldArray});
			e.target.textContent = `${store.getState().currentPlayer}`;


			const findedElemIndexes = findAllIndexes(currentFieldArray, store.getState().currentPlayer);

			let isWin = containsPattern(WIN_PATTERNS, findedElemIndexes);
			if (isWin) {
				// setIsGameEnded(true);
				store.dispatch({type: 'SET_GAME_END', payload: true})
			}
			// Ниже строчку можно переместить, если в if(над этим комментом) добавить else и только там менять ход игрока
			// если это исправить, то и в компоненте information тоже нужно убрать "инвентирующий костыль"
			store.getState().currentPlayer === 'X' ? store.dispatch({type: 'SET_CURRENT_PLAYER',  payload: 'O'}) : store.dispatch({type: 'SET_CURRENT_PLAYER',  payload: 'X'});
			console.log('CUR PLAUER', store.getState().currentPlayer);
		}

	};
	return (
		<FieldLayout  handleClick={handleClick} restartGame={restartGame} />
	);
};

export default Field;

