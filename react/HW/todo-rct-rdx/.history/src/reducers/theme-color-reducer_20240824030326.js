export const initialTodosState = {
    backgroundColor: '#F2F2F2'
};

export const themeColorReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'GET_Dar': {
            return {
                ...state,
                todos: action.payload,
                isLoading: true,
            };
        }
        
        default:
            return state; 
    }
};
