export const initialUserState = {
    name: 'Martin',
    age: 123,
}

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case 'INCREASE_AGE': {
            return {
                ...state,
                age: state.age + action.payload
            }
        }
        case 'RESET_AGE': {
            return {
                ...state,
                age: initialUserState.age
            }
        }
        default:
            return state;
    }
}