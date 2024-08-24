export const actionAddTodo = () => {
    return (todo) => {
        dispatch({
            type: 'ADD_TODOS',
            payload: todo,
        });
    }
};
