import sto
export const restartGame = () => {
    store.dispatch({ type: 'RESTART_GAME' });
};