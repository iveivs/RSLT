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
        case 'GET_LIGHT': {
            return {
                
            };
        }
        
        default:
            return state; 
    }
};
