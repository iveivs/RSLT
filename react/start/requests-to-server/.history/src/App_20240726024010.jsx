import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      
    }, [])

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
