const initialTodosState = {
    backgroundColor: '#F2F2F2',
    currentTheme: 'ligth',
};

export const themeColorReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'SET_DARK_THEME': {
            return {
                backgroundColor: '#696969',
                currentTheme: 'ligth',
            };
        }
        case 'SET_LIGHT_THEME': {
            return {
                backgroundColor: '#F2F2F2',
                currentTheme: 'ligth',
            };
        }
        default:
            return state; 
    }
};
