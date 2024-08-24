const useRequestAddSomeTodo = (input) => {
    
        fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({
                task: `${input}`,
                complited: 'false'
            }),
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log("Задача добавлена", response);
            })
            .finally();

    return {
        requestAddSomeTodo
    }
};

export const actionAddTodo = (todo) => ({
    type: 'ADD_TODOS',
    payload: todo,
})

export const actionAddTodo2 = () => {
    return async (dispatch) => {
        try {
            const { todos } = await useRequestAddSomeTodo();
            dispatch({
                type: 'GET_TODOS',
                payload: todos,
            });
        } catch (error) {
            console.error('Ошибка при загрузке todos:', error);
        }
    };
};


