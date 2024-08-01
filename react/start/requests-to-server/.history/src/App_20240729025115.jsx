import { useState, useEffect } from "react";
import "./App.css";

// npm install -g json-server@0.17.4 // не обязательно устанавливать глобально(-g)
// json-server --watch db.json НЕ РАБОТАЕТ
//  npx json-server src/someData.json  РАБОТАЕТ

function App() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    
    

    // состояние обновления данных на странице
    const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
    // ф-я для обновления данных на странице
    const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

    

    

    

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
