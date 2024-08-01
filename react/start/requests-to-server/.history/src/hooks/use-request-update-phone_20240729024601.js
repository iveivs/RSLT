import { useState } from "react";

// ф-я для обновления товара
export const useRequestUpdatePhone = (refreshProducts) => {
    const [isUpdating, setIsUpdating] = useState(false);

    const requestUpdatePhone = () => {
        setIsUpdating(true);
        fetch("http://localhost:3000/products/2", {
            method: "PUT",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({
                name: "смартфон",
                price: 321,
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
        
    }
};