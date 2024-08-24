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

export const initialTodosState = {
    todos: [],  // Начальное состояние как массив
};

export const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'GET_TODOS': {
            return {
                ...state,
                todos: action.payload,  // Обновляем только массив todos
            };
        }
        default:
            return state;  // Не забываем возвращать состояние по умолчанию
    }
};

