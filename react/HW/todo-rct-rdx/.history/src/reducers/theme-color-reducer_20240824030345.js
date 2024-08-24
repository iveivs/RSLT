export const initialTodosState = {
    backgroundColor: '#F2F2F2'
};

export const themeColorReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'GET_DARK': {
            return {
                ...state,
                backgroundColor: '#F2F2F2'
            };
        }
        
        default:
            return state; 
    }
};
