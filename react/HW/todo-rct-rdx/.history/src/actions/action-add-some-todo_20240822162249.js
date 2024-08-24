export const actionAddTodo = () => {
    return (todo) => {
        dispatch({
            type: 'A_TODOS',
            payload: todo,
        });
    }
};
