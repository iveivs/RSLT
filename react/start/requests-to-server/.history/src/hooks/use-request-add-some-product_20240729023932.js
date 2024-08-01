import { useState } from "react";

export const useRequestAddSomeProduct = () => {
    // состояние для того чтоб пока товар добавляется на страничку,
    // то кнопка должна быть не доступной
    const [isCreating, setIsCreating] = useState(false);

    

    const requestAddSomeProduct = () => {
        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({
                name: "name 4",
                price: 123,
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
        requestAddSomeProduct
    }
};