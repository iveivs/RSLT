import { useEffect, useState } from 'react';
import { store } from '../../store';
import { WIN_PATTERNS } from '../../constants/winPatterns';
import { FieldLayout } from './FieldLayout';
import { containsPattern, findAllIndexes } from '../../utilities';

const Field = ({state, setState}) => {
	// const [state, setState] = useState(store.getState());

	// useEffect(() => {
	// 	const unsubscribe = store.subscribe(() => setState(store.getState()));
	// 	return () => unsubscribe();
	// }, []);

	const { currentPlayer, isGameEnded, field } = state;

	const handleClick = (e) => {

		if (e.target.textContent === '' && !isGameEnded) {
			const currentElementDataIndex = Number(e.target.dataset.index);
			const currentFieldArray = field.map((elem, i) => (i === currentElementDataIndex ? currentPlayer : elem));

			store.dispatch({ type: 'SET_FIELD', payload: currentFieldArray });

			const findedElemIndexes = findAllIndexes(currentFieldArray, currentPlayer);
			const isWin = containsPattern(WIN_PATTERNS, findedElemIndexes);

			if (isWin) {
				store.dispatch({ type: 'SET_GAME_END', payload: true });
			} else {
				store.dispatch({
					type: 'SET_CURRENT_PLAYER',
					payload: currentPlayer === '❌' ? '⭕' : '❌'
				});
			}
		}
		if (!store.getState().field.includes('') && !isGameEnded) {
			store.dispatch({ type: 'SET_IS_DRAW', payload: true });
		} 
	};

	return <FieldLayout field={field} handleClick={handleClick} />;
};

export default Field;