export const useRequestGetTodoById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/todos/${id}`)
        const todo = await response.json()
        return todo
    } catch (error) {
        console.error("Ошибка при загрузке задачи:", error);
        throw error; 
    }
};

export const actionGetTodoById = (id) => {
    return async (dispatch) => {
        try {
            const todo = await useRequestGetTodoById(id)
            dispatch({
                type: 'GET_TODO_BY_ID', // Действие для редьюсера
                payload: todo,
            })
        } catch (error) {
            console.error('Ошибка при загрузке задачи:', error);
        }
    }
}
