// import { useEffect, useState } from 'react'; // Импортируем необходимые хуки
// import styles from './Field.module.css';
// import { store } from '../../store';
// import { WIN_PATTERNS } from '../../constants/winPatterns';

// const FieldLayout = ({ field, handleClick, restartGame }) => {
// 	return (
// 		<>
// 			<div className={styles.container}>
// 				{field.map((elem, i) => (
// 					<div
// 						onClick={(e) => handleClick(e)}
// 						data-index={i}
// 						key={i}
// 						className={`${styles.fieldItem} ${styles.fieldItem + (i + 1)}`}
// 					></div>
// 				))}
// 			</div>
// 			<div className="cover_btn">
// 				<button onClick={restartGame} className={styles.restartGameBtn}>
// 					Начать заново
// 				</button>
// 			</div>
// 		</>
// 	);
// };

// const Field = () => {
//     // Используем локальное состояние, чтобы хранить данные из store
//     const [state, setState] = useState(store.getState());

//     // Подписываемся на изменения store и обновляем локальное состояние
//     useEffect(() => {
//         const unsubscribe = store.subscribe(() => setState(store.getState()));
//         return () => unsubscribe(); // Отписываемся при размонтировании компонента
//     }, []);

//     // Локальные переменные
//     const { currentPlayer, isGameEnded, field } = state;

//     if(!field.some(elem => elem === '')){
//         store.dispatch({type: 'SET_IS_DRAW', payload: true});
//     }

//     const restartGame = () => {
//         store.dispatch({type: 'RESTART_GAME'});
//     };

//     const findAllIndexes = (arr, element) => {
//         const indexes = [];
//         arr.forEach((current, index) => {
//             if (current === element) {
//                 indexes.push(index);
//             }
//         });
//         return indexes;
//     };

//     const containsPattern = (patterns, indexes) => {
//         for (let pattern of patterns) {
//             if (pattern.every((index) => indexes.includes(index))) {
//                 return true;
//             }
//         }
//         return false;
//     };

//     const handleClick = (e) => {
//         let currentFieldArray;
//         if (e.target.textContent === '' && !isGameEnded) {
//             let currentElementDataIndex = Number(e.target.dataset.index);
            
//             currentFieldArray = field.map((elem, i) => {
//                 if (i === currentElementDataIndex) {
//                     elem = currentPlayer;
//                 }
//                 return elem;
//             });

//             store.dispatch({type: 'SET_FIELD', payload: currentFieldArray});
//             e.target.textContent = `${currentPlayer}`;

//             const findedElemIndexes = findAllIndexes(currentFieldArray, currentPlayer);

//             let isWin = containsPattern(WIN_PATTERNS, findedElemIndexes);
//             if (isWin) {
//                 store.dispatch({type: 'SET_GAME_END', payload: true});
//             }

//             currentPlayer === 'X' 
//                 ? store.dispatch({type: 'SET_CURRENT_PLAYER',  payload: 'O'}) 
//                 : store.dispatch({type: 'SET_CURRENT_PLAYER',  payload: 'X'});
//         }
//     };

//     return (
//         <FieldLayout field={field} handleClick={handleClick} restartGame={restartGame} />
//     );
// };

// export default Field;

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
    let { currentPlayer, isGameEnded, field } = store.getState();

    if (!field.some(elem => elem === '')) {
        console.log('IS_DRAW');
        store.dispatch({ type: 'SET_IS_DRAW', payload: true });
    }

    const restartGame = () => {
        store.dispatch({ type: 'RESTART_GAME' });
    };

    // Функция для поиска индексов ходов текущего игрока и записи их в массив
    const findAllIndexes = (arr, element) => {
        const indexes = [];
        arr.forEach((current, index) => {
            if (current === element) {
                indexes.push(index);
            }
        });
        return indexes;
    };

    // Функция для проверки победных паттернов в текущем массиве игрока, который ходит
    const containsPattern = (patterns, indexes) => {
        for (let pattern of patterns) {
            if (pattern.every((index) => indexes.includes(index))) {
                return true;
            }
        }
        return false;
    };

    // Функция отслеживающая действия игроков и управления логикой игры
    const handleClick = (e) => {
        if (e.target.textContent === '' && !isGameEnded) {
            let currentElementDataIndex = Number(e.target.dataset.index);
            
            // Обновляем поле после хода
            const updatedField = field.map((elem, i) => {
                if (i === currentElementDataIndex) {
                    return currentPlayer;
                }
                return elem;
            });

            store.dispatch({ type: 'SET_FIELD', payload: updatedField });
            e.target.textContent = `${currentPlayer}`;

            const playerMoves = findAllIndexes(updatedField, currentPlayer);
            const isWin = containsPattern(WIN_PATTERNS, playerMoves);

            if (isWin) {
                store.dispatch({ type: 'SET_GAME_END', payload: true });
                console.log('WIN', store.getState().isGameEnded);
            } else {
                // Переключение игрока
                const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
                store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: nextPlayer });
                console.log('Current Player After Dispatch:', store.getState().currentPlayer);
            }
        }
    };

    return (
        <FieldLayout field={field} handleClick={handleClick} restartGame={restartGame} />
    );
};

export default Field;

