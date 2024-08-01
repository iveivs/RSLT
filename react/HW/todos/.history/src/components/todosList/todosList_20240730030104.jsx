import { useState, useEffect } from 'react';
import { TODOS } from '../../constants/todos-link'

export const TodosList = () => {
	const [todos, setTodos] = useState();
    useEffect(() => {
        fetch(`${TODOS}`)
            .then((loadedData) => loadedData.json())
            .then((loadedProducts) => {
                setTodos(loadedProducts);
				console.log('todos', todos);
            });
    }, [todos]);
	return <div>
			<h2>todos-list</h2>
			{}
		</div>

}
