import { useState } from "react";
import { ref, remove } from "firebase/database"
import { db } from "../firebase";

export const useRequestDeleteTask = (refreshTodos) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const requestDeleteTask = (todo) => {
        setIsDeleting(true);

        const todoDbRef = ref(db, `todos/${todo.id}`)

        remove()

        fetch(`http://localhost:3000/todos/${todo.id}`, {
            method: "DELETE",
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log("Задача удалена с сервера", response);
                refreshTodos();
            })
            .finally(() => setIsDeleting(false));
    }
    return {
        isDeleting,
        requestDeleteTask,
    }
};
