import { useState } from 'react';
import { TODOS } from '../../constants/todos-link'

export const TodosList = () => {
	console.log("TEST", TODOS);
	const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://mocki.io/v1/8d7bce62-23c5-4f14-85c8-8220ad65ffad")
            .then((loadedData) => loadedData.json())
            .then((loadedProducts) => {
                setProducts(loadedProducts);
            });
    }, []);
	return <div>
			<h2>todos-list</h2>
		</div>

}
