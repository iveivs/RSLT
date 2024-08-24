const useRequestAddSomeTodo = async (input) => {
    try {
        const response = await fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({
                task: input,
                completed: false,  
            }),
        });

        const jsonResponse = await response.json();
        console.log("Задача добавлена", jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.error("Ошибка при добавлении задачи:", error);
        throw error;
    }
};

export const actionAddTodo = (todo) => {
    return async (dispatch) => {
        try {
            const addedTodo = await useRequestAddSomeTodo(todo);  // Ждем ответа от сервера
            dispatch({
                type: 'ADD_TODO',  // Исправлено имя действия
                payload: addedTodo,  // Добавляем результат ответа сервера, а не исходный input
            });
        } catch (error) {
            console.error('Ошибка при отправке todos:', error);
        }
    };
};



