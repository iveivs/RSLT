export const actionAddTodo = () => {
    return (todo) => {
            dispatch({
                type: 'GET_TODOS',
                payload: todo,
            });
        } catch (error) {
            console.error('Ошибка при загрузке todos:', error);
        }
    };
};