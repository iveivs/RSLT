import { useEffect, useState } from "react";
import { ref, onValue } from 'firebase/database'
import { db } from "../firebase";

export const useRequestGetProduct = (refreshProductsFlag) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        const productsDbRef = ref(db, 'products')

        onValue(productsDbRef, (snapshot) => {
            const 
        })
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