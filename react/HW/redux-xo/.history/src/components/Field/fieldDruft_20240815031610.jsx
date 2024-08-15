import { useEffect, useState } from 'react';
import styles from './Field.module.css';
import { store } from '../../store';
import { WIN_PATTERNS } from '../../constants/winPatterns';

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

const Field = () => {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        const unsubscribe = store.subscribe(() => setState(store.getState()));
        return () => unsubscribe();
    }, []);

    const { currentPlayer, isGameEnded, field } = state;

    // Проверяем, есть ли пустые ячейки, чтобы не вызвать действия при обновлении состояния
    useEffect(() => {
        if (!field.some(elem => elem === '') && !isGameEnded) {
            console.log('IS DRAW');
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
        let currentFieldArray;
        if (e.target.textContent === '' && !isGameEnded) {
            let currentElementDataIndex = Number(e.target.dataset.index);

            currentFieldArray = field.map((elem, i) => {
                if (i === currentElementDataIndex) {
                    elem = currentPlayer;
                }
                return elem;
            });

            store.dispatch({ type: 'SET_FIELD', payload: currentFieldArray });
            e.target.textContent = `${currentPlayer}`;

            const findedElemIndexes = findAllIndexes(currentFieldArray, currentPlayer);

            let isWin = containsPattern(WIN_PATTERNS, findedElemIndexes);
            if (isWin) {
                store.dispatch({ type: 'SET_GAME_END', payload: true });
            } else {
                store.dispatch({
                    type: 'SET_CURRENT_PLAYER',
                    payload: currentPlayer === 'X' ? 'O' : 'X',
                });
            }
        }
    };

    return (
        <FieldLayout field={field} handleClick={handleClick} restartGame={restartGame} />
    );
};

export default Field;

