import { useState } from "react";
import "./App.css";
import {
    useRequestAddSomeProduct,
    useRequestDeleteFen,
    useRequestUpdatePhone,
    useRequestGetProduct,
} from "./hooks";

// FIREBASE

function App() {
    // состояние обновления данных на странице
    const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
    // ф-я для обновления данных на странице
    const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

    const {isLoading, products} = useRequestGetProduct()

    const { isCreating, requestAddSomeProduct} = useRequestAddSomeProduct(refreshProducts)

    const { isUpdating, requestUpdatePhone } = useRequestUpdatePhone(refreshProducts)

    const { isDeleting, requestDeleteFen } = useRequestDeleteFen(refreshProducts)
    return (
        <>
            <h1>requests to server</h1>
            {isLoading ? (
                <div className="loader"></div>
            ) : (
                Object.entries(products).map(([{ id, name, price }) => (
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
