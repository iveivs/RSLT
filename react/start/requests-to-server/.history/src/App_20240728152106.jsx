import { useState, useEffect } from "react";
import "./App.css";

// npm install -g json-server@0.17.4 // не обязательно устанавливать глобально(-g)
// json-server --watch db.json НЕ РАБОТАЕТ
//  npx json-server src/someData.json  РАБОТАЕТ

function App() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(false)
    const [isCreating, setIsCreating] = useState(false)
    // состояние обновления данных на странице
    const [refreshProductsFlag, setRefreshProductsFlag] = useState(false)
    // ф-я для обновления данных на странице
    const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag)

    useEffect(() => {
      // спинер для загрузки
      setIsloading(true)
        fetch('http://localhost:3000/products') 
            .then((loadedData) => loadedData.json()) 
            .then((loadedProducts) => {
                setProducts(loadedProducts);
            })
            .finally(()=> setIsloading(false))
    }, [refreshProductsFlag]);

    const requestAddSomeProduct = () => {
      setIsCreating(true)
      fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json;charset=utf-8'},
        body: JSON.stringify({
          name: 'name 4',
          price: 123,
        })
      })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log('Товар добавлен', response);
        refreshProducts()
        setIsCreating(false)
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
