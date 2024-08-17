import { store } from '../../store';
import { WIN_PATTERNS } from '../../constants/winPatterns';
import { FieldLayout } from './FieldLayout';
import { containsPattern, findAllIndexes } from '../../utilities';

const Field = ({state}) => {
	const { currentPlayer, isGameEnded, field } = state;

	const handleClick = (i) => {

		if (e.target.textContent === '' && !isGameEnded) {
			const currentElementDataIndex = Number();
			const currentFieldArray = field.map((elem, i) => (i === currentElementDataIndex ? currentPlayer : elem));

			store.dispatch({ type: 'SET_FIELD', payload: currentFieldArray });

			const findedElemIndexes = findAllIndexes(currentFieldArray, currentPlayer);
			const isWin = containsPattern(WIN_PATTERNS, findedElemIndexes);

			if (isWin) {
				store.dispatch({ type: 'SET_GAME_END',});
			} else {
				store.dispatch({
					type: 'SET_CURRENT_PLAYER',
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
