export const requestAddSomeProduct = () => {
    setIsCreating(true);
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
};