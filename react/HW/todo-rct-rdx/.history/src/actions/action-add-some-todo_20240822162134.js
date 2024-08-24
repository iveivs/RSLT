export const actionAddTodos = () => {
    return async (dispatch) => {
        try {
            const { todos } = await useRequestGetTodos();
            // console.log("TODOS FROM REDUCER", todos);
            dispatch({
                type: 'GET_TODOS',
                payload: todos,
            });
        } catch (error) {
            console.error('Ошибка при загрузке todos:', error);
        }
    };
};