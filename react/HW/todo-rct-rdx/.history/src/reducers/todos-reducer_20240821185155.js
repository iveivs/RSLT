export const initialTodosState = {}
export const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'GET': {
            return {
                ...state,
            }
        }
    }
}