const initialTodosState = {
    backgroundColor: '#F2F2F2'
};

export const themeColorReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'GET_DARK': {
            return {
                backgroundColor: '#696969'
            };
        }
        case 'GET_LIGHT': {
            return {
                initialTodosState
            };
        }
        
        default:
            return state; 
    }
};
