import { useState } from "react";
import { ref, push } from "firebase/database"
import { db } from "../firebase";

export const useRequestAddSomeTodo = (refreshTodos, input) => {
    // состояние для того чтоб пока товар добавляется на страничку,
    // то кнопка должна быть не доступной
    const [isCreating, setIsCreating] = useState(false);

    const requestAddSomeTodo = () => {
        setIsCreating(true);

        const todosDbRef = ref(db, 'todos')

        push(todosDbRef, {
            task: `${input}`,
            complited: 'false'
        })
            .then((response) => {
                console.log("Задача добавлена", response);
                // refreshTodos();
            })
            .finally(() => setIsCreating(false));
    }

    return {
        isCreating,
        requestAddSomeTodo
    }
};
