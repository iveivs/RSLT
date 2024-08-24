
const useRequestGetTodos = async () => {
    let todos;
    try {
        const response = await fetch("http://localhost:3000/todos");
        const loadedTodos = await response.json();
        console.log('loadedTodos', loadedTodos);
        todos = loadedTodos;
    } catch (error) {
        console.error('Ошибка при загрузке todos:', error);
    }

    return {
        todos,
    };
};

export const actionGetTodos = () => {
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
            // Также можно добавить обработку ошибок в state через дополнительное действие
        }
    };
};
    