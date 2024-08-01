import { useState } from "react";
import { db } from "../firebase";
import { ref, set } from 'firebase/database'
// ф-я для обновления товара
export const useRequestUpdatePhone = (refreshProducts) => {
    const [isUpdating, setIsUpdating] = useState(false);

    const requestUpdatePhone = () => {
        setIsUpdating(true);

        const smartphoneDbRef = ref(db, 'pro')
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
        isUpdating,
        requestUpdatePhone,
    }
};