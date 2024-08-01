import { useEffect, useState } from "react";

export const useRequestGetTodos = (refreshProductsFlag) => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        // спинер для загрузки
        setIsloading(true);
        fetch("http://localhost:3000/todos")
            .then((loadedData) => loadedData.json())
            .then((loadedTodos) => {
                setTodos(loadedTodos);
            })
            .finally(() => setIsloading(false));
    }, [refreshProductsFlag]);

    return {
        todos,
        isLoading,
    }
}
