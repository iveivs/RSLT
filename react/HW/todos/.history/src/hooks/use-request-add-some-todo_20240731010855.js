import { useState } from "react";

export const useRequestAddSomeTodo = (refreshProducts, input) => {
    // состояние для того чтоб пока товар добавляется на страничку,
    // то кнопка должна быть не доступной
    const [isCreating, setIsCreating] = useState(false);

    const requestAddSomeTodo = () => {
        setIsCreating(true);
        fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({
                task: `${}`
            }),
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log("Товар добавлен", response);
                refreshProducts();
            })
            .finally(() => setIsCreating(false));
    }

    return {
        isCreating,
        requestAddSomeTodo
    }
};
