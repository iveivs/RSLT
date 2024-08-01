import { useState, useEffect } from "react";
import "./App.css";

// npm install -g json-server@0.17.4 // не обязательно устанавливать глобально(-g)
// json-server --watch db.json НЕ РАБОТАЕТ
//  npx json-server src/someData.json  РАБОТАЕТ

function App() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(false)
    const [refreshProductsFlag, setRefreshProductsFlag] = useState(false)
    const refreshProducts = () => setRefreshProductsFlag(!)

    useEffect(() => {
      // спинер для загрузки
      setIsloading(true)
        // создаём промис
        fetch('http://localhost:3000/products') // этот адрес называется "ручка"
            .then((loadedData) => loadedData.json()) // парсим джейсон
            .then((loadedProducts) => {
                // засовываем полученные данные в стейт
                setProducts(loadedProducts);
            })
            .finally(()=> setIsloading(false))
    }, []);

    const requestAddSomeProduct = () => {
      fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json;charset=utf-8'},
        body: JSON.stringify({
          name: 'tovar4',
          price: '123',
        })
      })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log('Товар добавлен', response);
      })
    }

    return (
        <>
            <h1>requests to server</h1>
            {isLoading ? <div className="loader"></div> : products.map(({ id, name, price }) => (
                <div key={id}>
                    {name} - {price} rub
                </div>
            ))}
            <button onClick={requestAddSomeProduct}>Добавить товар</button>
        </>
    );
}

export default App;
