import { useState } from "react";
import { db } from "../firebase";
import { ref, push } from 'firebase/database'

export const useRequestAddSomeProduct = (refreshProducts) => {
    // состояние для того чтоб пока товар добавляется на страничку,
    // то кнопка должна быть не доступной
    const [isCreating, setIsCreating] = useState(false);

    const requestAddSomeProduct = () => {
        setIsCreating(true);

        const productDbRef = ref(db, 'products')

        push(productDbRef, {
            name: "Новый пылесос",
            price: 5990,
        })
            .then((response) => {
                console.log("Товар добавлен", response);
            })
            .finally(() => setIsCreating(false));
    }

    return {
        isCreating,
        requestAddSomeProduct
    }
};