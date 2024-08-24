const initialTodosState = {
    backgroundColor: '#F2F2F2'
};

export const themeColorReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'SET_DARK': {
            return {
                backgroundColor: '#696969' // Меняем цвет на темный
            };
        }
        case 'SET_LIGHT': {
            return {
                backgroundColor: '#F2F2F2' // Меняем цвет на светлый
            };
        }
        default:
            return state; 
    }
};