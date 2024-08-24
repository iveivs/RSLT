export const initialTodosState = {
    todos: [],  
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
                todos: [...state.todos, action.payload],  // Добавляем новую задачу к текущему массиву
            };
        }
        default:
            return state;  // Возвращаем текущее состояние по умолчанию
    }
};
