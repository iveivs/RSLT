export const initialState = {
    user: {
        name: 'Martin',
        age: 123,
    },
    products: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_AGE': {
            return {
                ...state,
                user: {
                    ...state.user,
                    age: state.user.age + action.payload
                }
            }
        }
        case 'RESET_AGE' : {
            return {
                ...state,
                user: {
                    ...state.user,
                    age: initialState.user.age
                }
            }
        }
        default:
            return state;
    }
}