export const actionAddTodo = (todo) => {
    return () => {
        dispatch({
            type: 'ADD_TODOS',
            payload: todo,
        });
    }
};
