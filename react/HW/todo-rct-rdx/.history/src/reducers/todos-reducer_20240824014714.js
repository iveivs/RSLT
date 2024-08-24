export const initialTodosState = {
    todos: [],  
    selectedTodo: null,
    // isLoading: false,
};

export const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'GET_TODOS': {
            return {
                ...state,
                todos: action.payload,
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
            };
        }
        default:
            return state; 
    }
};
