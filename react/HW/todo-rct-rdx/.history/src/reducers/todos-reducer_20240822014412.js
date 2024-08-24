
export const initialTodosState = {}
export const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'GET_TODOS': {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

