import { useState } from "react";
import { ref, set } from "firebase/database"
import { db } from "../firebase";

// ф-я для обновления товара
export const useRequestUpdateTodo = (refreshTodos) => {
    const [isUpdating, setIsUpdating] = useState(false);

    const requestUpdateTodo = (currentTodo) => {
		setIsUpdating(true)
		currentTodo.complited === 'true' ? currentTodo.complited = 'false' : currentTodo.complited = 'true'

        const todosDbRef = ref(db, `todos/${currentTodo.id}`)

        set(todosDbRef, {
            task: `${currentTodo.task}`,
            complited: `${currentTodo.complited}`
        })
            .then((response) => {
            })
			.finally(() => setIsUpdating(false));
    }

    return {
        isUpdating,
        requestUpdateTodo,
    }
};
