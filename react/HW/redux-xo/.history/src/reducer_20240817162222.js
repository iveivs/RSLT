const initialState = {
    currentPlayer: "❌",
    isGameEnded: false,
    isDraw: false,
    field: ["", "", "", "", "", "", "", "", ""],
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_CURRENT_PLAYER":
            return {
                ...state,
                currentPlayer: state.currentPlayer === "❌" ? "⭕" : "❌",
            };
        case "SET_FIELD":
            return {
                ...state,
                field: payload,
            };
        case "RESTART_GAME":
            return initialState;
        case "SET_IS_DRAW":
            return {
                ...state,
                isDraw: true,
            };
        case "SET_GAME_END":
            return {
                ...state,
                isGameEnded: true,
            };
        default:
            return state;
    }
};
