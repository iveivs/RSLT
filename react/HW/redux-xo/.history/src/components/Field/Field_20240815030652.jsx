import { useEffect, useState } from 'react';
import styles from './Field.module.css';
import { store } from '../../store';
import { WIN_PATTERNS } from '../../constants/winPatterns';

// Компонент для отображения игрового поля
const FieldLayout = ({ field, handleClick, restartGame }) => {
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

// Основной компонент для управления игрой
const Field = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		// Подписка на обновления хранилища
		const unsubscribe = store.subscribe(() => setState(store.getState()));
		return () => unsubscribe();
	}, []);

	const { currentPlayer, isGameEnded, field } = state;

	// Проверка на ничью
	useEffect(() => {
		if (!field.includes('') && !isGameEnded) {
			console.log('IS_DRAW');
			store.dispatch({ type: 'SET_IS_DRAW', payload: true });
		}
	}, [field, isGameEnded]);

	const restartGame = () => {
		console.log('I WAS RESTARTED');
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
			e.target.textContent = `${currentPlayer}`;

			const findedElemIndexes = findAllIndexes(currentFieldArray, currentPlayer);
			const isWin = containsPattern(WIN_PATTERNS, findedElemIndexes);

			if (isWin) {
				store.dispatch({ type: 'SET_GAME_END', payload: true });
				console.log('WIN', store.getState().isGameEnded);
			} else {
				store.dispatch({
					type: 'SET_CURRENT_PLAYER',
					payload: currentPlayer === 'X' ? 'O' : 'X'
				});
			}
			console.log('CUR PLAYER', store.getState().currentPlayer);
		}
	};

	return <FieldLayout field={field} handleClick={handleClick} restartGame={restartGame} />;
};

export default Field;
