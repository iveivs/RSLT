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

// import styles from './Field.module.css';
// import { useState, useEffect } from 'react'; // Подключаем необходимые хуки
// import { store } from '../../store';
// import { WIN_PATTERNS } from '../../constants/winPatterns';

// const FieldLayout = ({ field, handleClick, restartGame }) => {
//     return (
//         <>
//             <div className={styles.container}>
//                 {field.map((elem, i) => (
//                     <div
//                         onClick={(e) => handleClick(e)}
//                         data-index={i}
//                         key={i}
//                         className={`${styles.fieldItem} ${styles.fieldItem + (i + 1)}`}
//                     >
//                         {elem}
//                     </div>
//                 ))}
//             </div>
//             <div className="cover_btn">
//                 <button onClick={restartGame} className={styles.restartGameBtn}>
//                     Начать заново
//                 </button>
//             </div>
//         </>
//     );
// };

// const Field = () => {
//     const [field, setField] = useState(store.getState().field);
//     const [currentPlayer, setCurrentPlayer] = useState(store.getState().currentPlayer);
//     const [isGameEnded, setIsGameEnded] = useState(store.getState().isGameEnded);

//     useEffect(() => {
//         const unsubscribe = store.subscribe(() => {
//             setField(store.getState().field);
//             setCurrentPlayer(store.getState().currentPlayer);
//             setIsGameEnded(store.getState().isGameEnded);
//         });
//         return () => unsubscribe();
//     }, []);

//     if (!field.some(elem => elem === '')) {
//         store.dispatch({ type: 'SET_IS_DRAW', payload: true });
//     }

//     const restartGame = () => {
//         store.dispatch({ type: 'RESTART_GAME' });
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
//         if (e.target.textContent === '' && !isGameEnded) {
//             const currentElementDataIndex = Number(e.target.dataset.index);

//             const updatedField = field.map((elem, i) => {
//                 if (i === currentElementDataIndex) {
//                     return currentPlayer;
//                 }
//                 return elem;
//             });

//             store.dispatch({ type: 'SET_FIELD', payload: updatedField });

//             const playerMoves = findAllIndexes(updatedField, currentPlayer);
//             const isWin = containsPattern(WIN_PATTERNS, playerMoves);

//             if (isWin) {
//                 store.dispatch({ type: 'SET_GAME_END', payload: true });
//             } else {
//                 const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
//                 store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: nextPlayer });
//             }
//         }
//     };

//     return (
//         <FieldLayout field={field} handleClick={handleClick} restartGame={restartGame} />
//     );
// };

// export default Field;

