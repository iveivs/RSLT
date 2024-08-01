import { useState, useEffect } from "react";
import "./App.css";

// npm install -g json-server@0.17.4 // не обязательно устанавливать глобально(-g)
// json-server --watch db.json НЕ РАБОТАЕТ
//  npx json-server src/someData.json  РАБОТАЕТ

function App() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    // состояние обновления данных на странице
    const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
    // ф-я для обновления данных на странице
    const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

    useEffect(() => {
        // спинер для загрузки
        setIsloading(true);
        fetch("http://localhost:3000/products")
            .then((loadedData) => loadedData.json())
            .then((loadedProducts) => {
                setProducts(loadedProducts);
            })
            .finally(() => setIsloading(false));
    }, [refreshProductsFlag]);

    // ф-я для обновления товара
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
    };
    const requestDeleteFen = () => {
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

    return (
        <>
            <h1>requests to server</h1>
            {isLoading ? (
                <div className="loader"></div>
            ) : (
                products.map(({ id, name, price }) => (
                    <div key={id}>
                        {name} - {price} rub
                    </div>
                ))
            )}
            <button disabled={isCreating} onClick={requestAddSomeProduct}>
                Добавить товар
            </button>
            <button disabled={isUpdating} onClick={requestUpdatePhone}>
                Обновить телефон
            </button>
            <button disabled={isDeleting} onClick={requestDeleteFen}>
                Удалить фен
            </button>
        </>
    );
}

export default App;
