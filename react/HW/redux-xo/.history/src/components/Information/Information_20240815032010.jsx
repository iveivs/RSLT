import { useEffect, useState } from 'react';
import { store } from '../../store';
import inform


const Information = () => {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        const handleStoreChange = () => {
            setState(store.getState());
        };

        const unsubscribe = store.subscribe(handleStoreChange);

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

