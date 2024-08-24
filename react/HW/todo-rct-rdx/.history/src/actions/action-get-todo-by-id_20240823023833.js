export const useRequestGetTodoById = async (id) => {
    const response = fetch(`http://localhost:3000/todos/${id}`)
        .then((loadedData) => loadedData.json())
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
