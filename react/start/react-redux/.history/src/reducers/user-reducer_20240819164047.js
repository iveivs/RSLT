export const initialUserState = {
    name: 'Martin',
    age: 123,
}

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case 'INCREASE_AGE': {
            return {
                ...state,
                user: {
                    
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