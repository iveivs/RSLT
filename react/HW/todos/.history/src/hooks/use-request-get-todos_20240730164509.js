import { useEffect, useState } from "react";
import { ref, onValue } from 'firebase/database'
import { db } from "../firebase";

export const useRequestGet = (refreshProductsFlag) => {
    const [products, setProducts] = useState({});
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        const productsDbRef = ref(db, 'products')

        return onValue(productsDbRef, (snapshot) => {
            const loadedProducts = snapshot.val() || {}

            setProducts(loadedProducts)
            setIsloading(false)
        })
    }, []);

    return {
        products,
        isLoading,
    }
}
