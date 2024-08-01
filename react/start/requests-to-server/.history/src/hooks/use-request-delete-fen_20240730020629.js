import { useState } from "react";


export const useRequestDeleteFen = (refreshProducts) => {
    const [isDeleting, setIsDeleting] = useState(false);
    
    const requestDeleteFen = (refreshProducts) => {
        

        setIsDeleting(true);

        fetch("http://localhost:3000/products/3", {
            method: "DELETE",
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
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