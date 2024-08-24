export const useRequestGetTodoById = async (id) => {
    
        )
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
