export const initialTodosState = {
    backgroundColor: '#F2F2F2'
};

export const themeColorReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'GET_THEM': {
            return {
                ...state,
                todos: action.payload,
                isLoading: true,
            };
        }
        case 'ADD_TODO': {
            return {
                ...state,
                todos: [...state.todos, action.payload], 
            };
        }
        case 'GET_TODO_BY_ID': {
            return {
                ...state,
                selectedTodo: action.payload, 
            };
        }
        case 'DELETE_TODO': {
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        }
        case 'UPDATE_TODO': {
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? action.payload : todo
                ),
                selectedTodo: action.payload,
            };
        }
        default:
            return state; 
    }
};
