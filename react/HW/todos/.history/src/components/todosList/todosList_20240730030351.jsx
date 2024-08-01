import { useState, useEffect } from 'react';
import { TODOS } from '../../constants/todos-link'

export const TodosList = () => {
	const [todos, setTodos] = useState();
    useEffect(() => {
        fetch(`${TODOS}`)
            .then((loadedData) => loadedData.json())
            .then((loadedProducts) => {
				console.log();
                setTodos(loadedProducts);
				console.log('todos', todos);
            });
    }, []);
	return <div>
			<h2>todos-list</h2>
			{todos && todos.map((todo) => {
				<p>{todo.title}</p>
			})}
		</div>

}
