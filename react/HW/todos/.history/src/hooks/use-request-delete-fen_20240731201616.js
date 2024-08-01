import { useState } from "react";

export const useRequestDeleteTask = (refreshProducts) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const requestDeleteTask = (refreshProducts) => {


        setIsDeleting(true);

        fetch("http://localhost:3000/products/3", {
            method: "DELETE",
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log("Задача удалена с сервера", response);
                refreshProducts();
            })
            .finally(() => setIsUpdating(false));
    }
    return {
        isDeleting,
        requestDeleteTask,
    }
};
