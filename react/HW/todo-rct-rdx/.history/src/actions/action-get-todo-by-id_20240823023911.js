export const useRequestGetTodoById = async (id) => {
    const response = await fetch(`http://localhost:3000/todos/${id}`)
        const todo =  await response
        .then((loadedTodos) => {
            return loadedTodos;
        })
        .finally();

    return data
};

export const actionGetTodoById = () => {
    return async (dispatch) => {
        try {
            const todo = await useRequestGetTodoById()
            dispatch({

            })
        } catch {

        }
    }
}
