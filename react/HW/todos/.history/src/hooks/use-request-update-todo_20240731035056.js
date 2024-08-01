import { useState } from "react";

// ф-я для обновления товара
export const useRequestUpdateTodo = (refreshProducts) => {
    const [isUpdating, setIsUpdating] = useState(false);

    const requestUpdateTodo = () => {
		setIsUpdating(true);
		// id, task, complited
		// complited === 'true' ? complited = 'false' : complited = 'true'

        fetch(`http://localhost:3000/todos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({
                // task: `${task}`,
				// complited: complited
				task: ''
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
