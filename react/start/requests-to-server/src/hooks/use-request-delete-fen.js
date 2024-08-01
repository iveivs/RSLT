import { useState } from "react";
import { db } from "../firebase";
import { ref, remove } from 'firebase/database'

export const useRequestDeleteFen = (refreshProducts) => {
    const [isDeleting, setIsDeleting] = useState(false);
    
    const requestDeleteFen = (refreshProducts) => {
        setIsDeleting(true);

        const fenDbRef = ref(db, 'products/003')

        remove(fenDbRef)    
            .then((response) => {  // данная часть не сильно нужна, только чтоб посмотреть что set возвращает промис, и что в нём
                console.log("Фен удалён, ответ сервера", response);
                refreshProducts();
            })
            .finally(() => setIsUpdating(false));
    }
    return {
        isDeleting,
        requestDeleteFen
    }
};