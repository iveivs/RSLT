import { useEffect, useState } from "react";
import { ref, onValue } from 'firebase/database'

export const useRequestGetProduct = (refreshProductsFlag) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        const productsDB
        // спинер для загрузки
        setIsloading(true);
        fetch("http://localhost:3000/products")
            .then((loadedData) => loadedData.json())
            .then((loadedProducts) => {
                setProducts(loadedProducts);
            })
            .finally(() => setIsloading(false));
    }, [refreshProductsFlag]);

    return {
        products,
        isLoading,
    }
}