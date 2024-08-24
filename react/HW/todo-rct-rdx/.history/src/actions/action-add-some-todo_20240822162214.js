export const actionAddTodo = () => {
    return async () => {
            dispatch({
                type: 'GET_TODOS',
                payload: todos,
            });
        } catch (error) {
            console.error('Ошибка при загрузке todos:', error);
        }
    };
};