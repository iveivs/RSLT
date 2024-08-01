import { useState } from "react";

// ф-я для обновления товара
export const useRequestUpdateTodo = (refreshProducts) => {
    const [isUpdating, setIsUpdating] = useState(false);
	complited === 'true' ? complited = 'false' : complited = 'true'
    const requestUpdateTodo = (id, task, complited) => {
        setIsUpdating(true);
        fetch(`http://localhost:3000/todos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({
                task: `${task}`,
				complited: complited
            }),
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log("Телефон обновлён, ответ сервера", response);
                refreshProducts();
            })
            .finally(() => setIsUpdating(false));
    }

    return {
        isUpdating,
        requestUpdateTodo,
    }
};
