import { useState } from "react";

export const useRequestDeleteTask = (refreshs) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const requestDeleteTask = (todo) => {
        setIsDeleting(true);

        fetch(`http://localhost:3000/todos/${todo.id}`, {
            method: "DELETE",
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log("Задача удалена с сервера", response);
                refreshProducts();
            })
            .finally(() => setIsDeleting(false));
    }
    return {
        isDeleting,
        requestDeleteTask,
    }
};
