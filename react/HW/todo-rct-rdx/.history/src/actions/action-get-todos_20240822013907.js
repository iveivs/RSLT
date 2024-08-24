
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

const { todos } = useRequestGetTodos()
console.log("TODOS FROM REDUCER", todos);

export const actionGetTodos = () => {
    return async (dispatch) => {
        try {
            // Выполняем запрос к API
            const { todos } = await useRequestGetTodos();

            // Отправляем action с результатом запроса
            dispatch({
                type: 'SET_TODOS',
                payload: todos,
            });
        } catch (error) {
            console.error('Ошибка при загрузке todos:', error);
            // Также можно добавить обработку ошибок в state через дополнительное действие
        }
    };
};
    