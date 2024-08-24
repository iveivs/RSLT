import { useState } from "react";

export const useRequestAddSomeTodo = (refreshTodos, input) => {
    const [isCreating, setIsCreating] = useState(false);

    const requestAddSomeTodo = () => {
        setIsCreating(true);
        fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({
                task: `${input}`,
                complited: 'false'
            }),
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                // console.log("Задача добавлена", response);
                refreshTodos();
            })
            .finally(() => setIsCreating(false));
    }

    return {
        isCreating,
        requestAddSomeTodo
    }
};

export const actionAddTodo = (todo) => ({
    type: 'ADD_TODOS',
    payload: todo,
})


