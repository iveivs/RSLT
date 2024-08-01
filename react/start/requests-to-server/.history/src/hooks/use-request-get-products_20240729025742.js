import { useEffect, useState } from "react";

export const uuseRequestGetProduct = (refreshProductsFlag) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        // спинер для загрузки
        setIsloading(true);
        fetch("http://localhost:3000/products")
            .then((loadedData) => loadedData.json())
            .then((loadedProducts) => {
                setProducts(loadedProducts);
            })
            .finally(() => setIsloading(false));
    }, [refreshProductsFlag]);
}