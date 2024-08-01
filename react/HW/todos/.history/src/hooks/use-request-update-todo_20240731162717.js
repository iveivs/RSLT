import { useState } from "react";

// ф-я для обновления товара
export const useRequestUpdateTodo = (refreshProducts) => {
    const [isUpdating, setIsUpdating] = useState(false);
	// console.log(' It is currentTodo ', currentTodo);

    const requestUpdateTodo = (currentTodo) => {
		console.log('DATA', data);
		// currentTodo.complited === 'true' ? currentTodo.complited = 'false' : currentTodo.complited = 'true'

        // fetch(`http://localhost:3000/todos/${currentTodo.id}`, {
        //     method: "PUT",
        //     headers: { "Content-Type": "application/json;charset=utf-8" },
        //     body: JSON.stringify({
        //         task: `${currentTodo.task}`,
		// 		complited: currentTodo.complited
        //     }),
        // })
        //     .then((rawResponse) => rawResponse.json())
        //     .then((response) => {
        //         console.log("Телефон обновлён, ответ сервера", response);
        //         refreshProducts();
        //     })
    }

    return {
        isUpdating,
        requestUpdateTodo,
    }
};
