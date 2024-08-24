export const useRequestUpdateTodo = async (currentTodo) => {
    try {
        const response = fetch(`http://localhost:3000/todos/${currentTodo.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(currentTodo),
        })

        const updatedTodo = await response.json(); 
        console.log("Задача обновлена", updatedTodo);
        return updatedTodo;

    } catch (error) {
        console.error("Ошибка при обновлении задачи:", error);
        throw error;
    }
};

export const actionUpdateTodo = (todo) => {
    return async (dispatch) => {
        try {
            const updatedTodo = await useRequestUpdateTodo(todo);
            dispatch({
                type: 'UPDATE_TODO',
                payload: updatedTodo,
            });
        } catch (error) {
            console.error("Ошибка при обновлении задачи:", error);
        }
    }
}
