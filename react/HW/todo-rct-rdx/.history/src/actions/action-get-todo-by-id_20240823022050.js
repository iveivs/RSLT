

export const useRequestGetTodoById = (id) => {
    const [isLoading, setIsloading] = useState(false);

    const getTodoById = async () => {
        setIsloading(true);
        const data = fetch(`http://localhost:3000/todos/${id}`)
            .then((loadedData) => loadedData.json())
            .then((loadedTodos) => {
                return loadedTodos;
            })
            .finally(() => setIsloading(false));

        return data;
    };

    return {
        getTodoById,
        isLoading,
    };
};
