export const initialTodosState = {
    todos: [],  
    selectedTodo: null,
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
        default:
            return state; 
    }
};
