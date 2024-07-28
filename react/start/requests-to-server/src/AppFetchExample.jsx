import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://mocki.io/v1/8d7bce62-23c5-4f14-85c8-8220ad65ffad")
            .then((loadedData) => loadedData.json())
            .then((loadedProducts) => {
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
