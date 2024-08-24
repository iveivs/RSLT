export const initialTodosState = {
    todos: [],  
};

export const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'GET_TODOS': {
            return {
                ...state,
                todos: action.payload,  // Обновляем только массив todos
            };
        }
        case 'ADD_TODOS': {
            return {
                ...state,
                todos: [...todos, ]action.payload,  // Обновляем только массив todos
            };
        }
        default:
            return state;  // Не забываем возвращать состояние по умолчанию
    }
};

