import { useState, useEffect } from 'react';
import { TODOS } from '../../constants/todos-link'
import styles from './TodosList.module.css'

export const TodosList = () => {
	const [todos, setTodos] = useState([]);
	const [isL]
    useEffect(() => {
        // fetch(`${TODOS}`)
        //     .then((loadedData) => loadedData.json())
        //     .then((loadedProducts) => {
        //         setTodos(loadedProducts);
        //     });
		const fetchTodos = async () => {
			try {
				const response = await fetch(TODOS)
			} catch(error) {

			}
		}
    }, []);
	return <div>
			<h2>todos-list</h2>
			<li>

			</li>
			{todos && todos.map((todo) => (
				<p className={styles.list_item} key={todo.id}>{todo.title}</p>
			))}
		</div>
}




// import React, { useEffect, useState } from 'react';

// export const TodosList = () => {
// 	const [todos, setTodos] = useState([]);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		fetch('https://jsonplaceholder.typicode.com/todos')
// 			.then((response) => {
// 				if (!response.ok) {
// 					throw new Error('Network response was not ok');
// 				}
// 				return response.json();
// 			})
// 			.then((data) => {
// 				setTodos(data);
// 				setLoading(false);
// 			})
// 			.catch((error) => {
// 				setError(error);
// 				setLoading(false);
// 			});
// 	}, []);

// 	if (loading) {
// 		return <div>Loading...</div>;
// 	}

// 	if (error) {
// 		return <div>Error: {error.message}</div>;
// 	}

// 	return (
// 		<div>
// 			<h1>Todo List</h1>
// 			<ul>
// 				{todos.map((todo) => (
// 					<li key={todo.id}>
// 						{todo.title} {todo.completed ? '✔️' : '❌'}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };


