const initialTodosState = {
    backgroundColor: '#F2F2F2',
    currentTheme: 'light', 
};

export const themeColorReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'SET_DARK_THEME': {
            return {
                ...state,
                backgroundColor: '#696969',
                currentTheme: 'dark',
            };
        }
        case 'SET_LIGHT_THEME': {
            return {
                ...state,
                backgroundColor: '#F2F2F2',
                currentTheme: 'light',
            };
        }
        default:
            return state; 
    }
};
