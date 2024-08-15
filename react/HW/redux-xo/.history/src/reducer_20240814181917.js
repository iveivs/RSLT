const initialState = {
    currentPlayer: 'X',
    isGameEnded: false,
    isDraw: false,
    field: ['', '', '', '', '', '', '', '', ''],
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_CURRENT_PLAYER':
            return {
                ...state,
                currentPlayer: payload
            };
        case 'SET_FIELD':
            return {
                
            }
        case 'RESTART_GAME':
            return initialState;
        case 'SET_IS_DRAW':
            return {
                ...state,
                isDraw: payload,
            };
        case 'SET_GAME_END':
            return {
                ...state,
                isGameEnded: payload,
            };
        default:
            return state;
    }
};