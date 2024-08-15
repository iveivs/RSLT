import { useEffect, useState } from 'react';
import styles from './Field.module.css';
import { store } from '../../store';
import { WIN_PATTERNS } from '../../constants/winPatterns';
import { FieldLayout } from './FieldLayout';

const Field = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => setState(store.getState()));
		return () => unsubscribe();
	}, []);

	const { currentPlayer, isGameEnded, field } = state;

	useEffect(() => {
		if (!field.includes('') && !isGameEnded) {
			store.dispatch({ type: 'SET_IS_DRAW', payload: true });
		}
	}, [field, isGameEnded]);

	const restartGame = () => {
		store.dispatch({ type: 'RESTART_GAME' });
		const allFields = document.querySelectorAll(`.${styles.fieldItem}`);
		allFields.forEach((elem) => (elem.textContent = ''));
	};

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
			if (pattern.every((index) => indexes.includes(index))) {
				return true;
			}
		}
		return false;
	};

	const handleClick = (e) => {
		if (e.target.textContent === '' && !isGameEnded) {
			const currentElementDataIndex = Number(e.target.dataset.index);
			const currentFieldArray = field.map((elem, i) => (i === currentElementDataIndex ? currentPlayer : elem));

			store.dispatch({ type: 'SET_FIELD', payload: currentFieldArray });
			// e.target.textContent = `${currentPlayer}`; // поменял на вывод через массив

			const findedElemIndexes = findAllIndexes(currentFieldArray, currentPlayer);
			const isWin = containsPattern(WIN_PATTERNS, findedElemIndexes);

			if (isWin) {
				store.dispatch({ type: 'SET_GAME_END', payload: true });
			} else {
				store.dispatch({
					type: 'SET_CURRENT_PLAYER',
					payload: currentPlayer === 'X' ? 'O' : 'X'
				});
			}
		}
	};

	return <FieldLayout field={field} handleClick={handleClick} restartGame={restartGame} />;
};

export default Field;
