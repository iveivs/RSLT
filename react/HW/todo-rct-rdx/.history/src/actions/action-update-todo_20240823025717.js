export const useRequestUpdateTodo = (refreshTodos) => {

    const requestUpdateTodo = async (currentTodo) => {

       
            .then(() => {
                refreshTodos();
            })
            .finally(() => setIsUpdating(false));
    };

    return {
        isUpdating,
        requestUpdateTodo,
    };
};
