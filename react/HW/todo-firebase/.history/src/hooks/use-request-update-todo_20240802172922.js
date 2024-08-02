import { useState } from "react";
import { ref, set } from "firebase/database"
import { db } from "../firebase";

// ф-я для обновления товара
export const useRequestUpdateTodo = (refreshTodos) => {
    const [isUpdating, setIsUpdating] = useState(false);

    const requestUpdateTodo = (currentTodo) => {
		setIsUpdating(true)
		currentTodo.complited === 'true' ? currentTodo.complited = 'false' : currentTodo.complited = 'true'

        const todosDbRef = ref()
        // fetch(`http://localhost:3000/todos/${currentTodo.id}`, {
        //     method: "PUT",
        //     headers: { "Content-Type": "application/json;charset=utf-8" },
        //     body: JSON.stringify({
        //         task: `${currentTodo.task}`,
		// 		complited: currentTodo.complited
        //     }),
        // })
        //     .then((rawResponse) => rawResponse.json())
            .then((response) => {
                refreshTodos();
            })
			.finally(() => setIsUpdating(false));
    }

    return {
        isUpdating,
        requestUpdateTodo,
    }
};
