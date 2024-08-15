import { useEffect, useState } from 'react';
import styles from './Information.module.css';
import { store } from '../../store';

const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
    return (
        <div className={styles.info_container}>
            {isDraw && <p>Ничья</p>}
            {!isDraw && isGameEnded && <p className={styles.win}>Победа: {currentPlayer}</p>}
            {!isDraw && !isGameEnded && <p className={styles.currentPlayer}>Сейчас ходит: {currentPlayer}</p>}
        </div>
    );
};

const Information = () => {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        const handleStoreChange = () => {
            setState(store.getState());
        };

        const unsubscribe = store.subscribe(handleStoreChange);

        // Отписка при размонтировании компонента
        return () => unsubscribe();
    }, []);

    const { currentPlayer, isDraw, isGameEnded } = state;

    return (
        <InformationLayout 
            currentPlayer={currentPlayer}
            isDraw={isDraw}
            isGameEnded={isGameEnded}
        />
    );
};

export default Information;

