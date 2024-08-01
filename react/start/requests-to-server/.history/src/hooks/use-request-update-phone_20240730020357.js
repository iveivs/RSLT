import { useState } from "react";
import { db } from "../firebase";
import { ref, set } from 'firebase/database'
// ф-я для обновления товара
export const useRequestUpdatePhone = (refreshProducts) => {
    const [isUpdating, setIsUpdating] = useState(false);

    const requestUpdatePhone = () => {
        setIsUpdating(true);

        const smartphoneDbRef = ref(db, 'products/002')

        set(smartphoneDbRef, {
            name: 'Смартфон',
            price: 167000,
        })
            .then((response) => { // данная часть не сильно нужна, только чтоб посмотреть что 
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