export const initialTodosState = {
    backgroundColor: '#F2F2F2'
};

export const themeColorReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'GET_DARK': {
            return {
                ...state,
                backgroundColor: '#696969'
            };
        }
        case 'GET_LI': {
            return {
                ...state,
                backgroundColor: '#696969'
            };
        }
        
        default:
            return state; 
    }
};
