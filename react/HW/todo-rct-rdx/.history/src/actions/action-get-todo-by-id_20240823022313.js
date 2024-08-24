export const useRequestGetTodoById = (id) => {

    const getTodoById = async () => {
        const data = fetch(`http://localhost:3000/todos/${id}`)
            .then((loadedData) => loadedData.json())
            .then((loadedTodos) => {
                return loadedTodos;
            })
            .finally();

        return data;
    };

    return data
};
