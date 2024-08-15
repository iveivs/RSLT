// import PropTypes from 'prop-types';
import styles from './Field.module.css';
import { store } from '../../store';
import { WIN_PATTERNS } from '../../constants/winPatterns';

const FieldLayout = ({ handleClick, restartGame }) => {
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
	if(!store.getState().field.some(elem => elem === '')){
		console.log('SET_IS_DRAW');
		store.dispatch({type: 'SET_IS_DRAW', payload: true})
	}
	const restartGame = () => {
		console.log('I WAS RESTARTED');
		// store.dispatch({type: 'RESTART_GAME'})
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
		c
		let currentFieldArray;
		if (e.target.textContent === '' && !store.getState().isGameEnded) {
			let currentElementDataIndex = Number(e.target.dataset.index);
			
			currentFieldArray = store.getState().field.map((elem, i) => {
				if (i === currentElementDataIndex) {
					elem = store.getState().currentPlayer;
				}
				return elem;
			});
			console.log('currentElementDataIndex', currentElementDataIndex, 'currentFieldArray', currentFieldArray);
			console.log('store field', store.getState().field);

			store.dispatch({type: 'SET_FIELD', payload: currentFieldArray});
			e.target.textContent = `${store.getState().currentPlayer}`;

			const findedElemIndexes = findAllIndexes(currentFieldArray, store.getState().currentPlayer);

			let isWin = containsPattern(WIN_PATTERNS, findedElemIndexes);
			if (isWin) {
				store.dispatch({type: 'SET_GAME_END', payload: true})
			}

			store.getState().currentPlayer === 'X' ? store.dispatch({type: 'SET_CURRENT_PLAYER',  payload: 'O'}) : store.dispatch({type: 'SET_CURRENT_PLAYER',  payload: 'X'});
			console.log('CUR PLAUER', store.getState().currentPlayer);
		}

	};
	return (
		<FieldLayout  handleClick={handleClick} restartGame={restartGame} />
	);
};

export default Field;

