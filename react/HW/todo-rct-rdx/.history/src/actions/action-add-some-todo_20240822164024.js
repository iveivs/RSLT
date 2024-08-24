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
};

export const actionAddTodo = (todo) => ({
    type: 'ADD_TODOS',
    payload: todo,
})

export const actionAddTodo = (todo) => {
    return async (dispatch) => {
        try {
            useRequestAddSomeTodo(todo);
            dispatch({
                type: 'ADD_TODOS',
                payload: todo,
            });
        } catch (error) {
            console.error('Ошибка при отправке todos:', error);
        }
    };
};


