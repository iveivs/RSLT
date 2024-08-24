export const actionAddTodo = (todo) => { 
        dispatch({
            type: 'ADD_TODOS',
            payload: todo,
        });
    }
