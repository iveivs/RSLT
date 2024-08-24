export const actionAddTodo = () => {
    return (todo) => {
            dispatch({
                type: 'GET_TODOS',
                payload: todo,
            });
        } 
    };
};