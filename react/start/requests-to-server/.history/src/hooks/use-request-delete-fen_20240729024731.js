export const useRequestDeleteFen = () => {

    const requestDeleteFen 
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
};