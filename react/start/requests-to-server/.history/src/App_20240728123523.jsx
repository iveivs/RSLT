import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const PRODUCTS_MOCK = [
    { id: "tovar 1", name: "name 1", price: "price 1" },
    { id: "2", name: "name 2", price: "2" },
    { id: "3", name: "name 3", price: "price 3" },
];
function App() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(false)
    // имитируем мок бэкенда
    useEffect(() => {
        // создаём промис
        new Promise((resolve) => {
          setIsloading(true)
            // в случае успеха(resolve) возвращаем объект с вставленным методом под названием json,
            // который просто возвращает наши данные из JSON переменной(PRODUCTS_MOCK)
            // так же для имитации задержки добавим setTimeout
            setTimeout(() => {
                resolve({ json: () => PRODUCTS_MOCK });
            }, 1000);
        })
            .then((loadedData) => loadedData.json()) // парсим джейсон
            .then((loadedProducts) => {
                // засовываем полученные данные в стейт
                setProducts(loadedProducts);
            });
    }, []);

    return (
        <>
            <h1>requests to server</h1>
            {products.map(({ id, name, price }) => (
                <div key={id}>
                    {name} - {price} rub
                </div>
            ))}
        </>
    );
}

export default App;
