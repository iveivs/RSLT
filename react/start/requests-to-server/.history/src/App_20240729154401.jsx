import { useState, useEffect } from "react";
import "./App.css";
import {
    useRequestAddSomeProduct,
    useRequestDeleteFen,
    useRequestUpdatePhone,
    useRequestGetProduct,
} from "./hooks";

// npm install -g json-server@0.17.4 // не обязательно устанавливать глобально(-g)
//  npx json-server src/someData.json

function App() {
    // состояние обновления данных на странице
    const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
    // ф-я для обновления данных на странице
    const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

    const {isLoading, products} = useRequestGetProduct(refreshProductsFlag)

    const { isCreating, requestAddSomeProduct} = useRequestAddSomeProduct(refreshProducts)

    const { isUpdating, requestUpdatePhone } = useRequestUpdatePhone(refreshProducts)

    const {} = useRequestDeleteFen()
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
