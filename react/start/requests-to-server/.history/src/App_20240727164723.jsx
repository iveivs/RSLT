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

    useEffect(
        () => {},
        new Promise((resolve) => {
            resolve();
        })
        .then((loadedData) => loadedData.json())
        .then(loadedProducts => {
          setProducts(l)
        })
    );

    return (
        <>
            <h1>requests to server</h1>
            <button onClick={() => setCounter(counter + 1)}>+ 1</button>
        </>
    );
}

export default App;
