export const actionAddTodo = () => {
    return () => {
        dispatch({
            type: 'ADD_TODOS',
            payload: todo,
        });
    }
};
