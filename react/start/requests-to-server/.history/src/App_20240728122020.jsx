import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const PRODUCTS_MOCK = [
    { id: "tovar 1", name: "name 1", price: "price 1" },
    { id: "2", name: "name 2", price: "price 2" },
    { id: "3", name: "name 3", price: "price 3" },
];
function App() {
    const [products, setProducts] = useState([]);

    // имитируем мок бэкенда
    useEffect(
        () => {
          // создаём промис
          new Promise((resolve) => {
            // в случае успеха(resolve) возвращаем объект с методом
            resolve({ json: () => PRODUCTS_MOCK});
        })
            .then((loadedData) => loadedData.json())
            .then((loadedProducts) => {
                setProducts(loadedProducts);
            })
        },[]);

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
