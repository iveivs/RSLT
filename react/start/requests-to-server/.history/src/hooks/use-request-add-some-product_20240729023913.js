import { useState } from "react";

export const useRequestAddSomeProduct = () => {
    // состояние для того чтоб пока товар добавляется на страничку,
    // то кнопка должна быть не доступной
    const [isCreating, setIsCreating] = useState(false);

    setIsCreating(true);

    const requestAddSomeProduct = () => {

    }
    
    return {
        isCreating,
        requestAddSomeProduct
    }
};