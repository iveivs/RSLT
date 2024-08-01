export useEffect(() => {
        // спинер для загрузки
        setIsloading(true);
        fetch("http://localhost:3000/products")
            .then((loadedData) => loadedData.json())
            .then((loadedProducts) => {
                setProducts(loadedProducts);
            })
            .finally(() => setIsloading(false));
    }, [refreshProductsFlag]);