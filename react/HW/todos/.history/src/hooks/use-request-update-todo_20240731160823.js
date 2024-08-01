import { useState } from "react";

// ф-я для обновления товара
export const useRequestUpdateTodo = (refreshProducts, currentTodo) => {
    const [isUpdating, setIsUpdating] = useState(false);
	console.log('currentTodo', currentTodo);
    const requestUpdateTodo = () => {
		setIsUpdating(true);
		// id, task, complited
		currentTodo.complited === 'true' ? complited = 'false' : complited = 'true'

        fetch(`http://localhost:3000/todos/${currentTodo.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({
                task: `${currentTodo.task}`,
				complited: currentTodo.complited
				// task: '',
				// complited: ''
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
