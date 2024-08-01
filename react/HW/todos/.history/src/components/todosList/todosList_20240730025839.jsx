import { useState, useEffect } from 'react';
import { TODOS } from '../../constants/todos-link'

export const TodosList = () => {
	console.log("TEST", TODOS);
	const [todos, setTodos] = useState();
    useEffect(() => {
        fetch(`${TODOS}`)
            .then((loadedData) => loadedData.json())
            .then((loadedProducts) => {
                setProducts(loadedProducts);
				console.log();
            });
    }, []);
	return <div>
			<h2>todos-list</h2>
		</div>

}
