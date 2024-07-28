import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const PRODUCTS_MOCK = [
    { id: "tovar 1", name: "name 1", price: "price 1" },
    { id: "2", name: "name 2", price: "price 2" },
    { id: "3", name: "name 3", price: "price 3" },
];
function App() {
    const [counter, setCounter] = useState(0);

    useEffect(
        () => {},
        new Promise((resolve) => {
            resolve();
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
