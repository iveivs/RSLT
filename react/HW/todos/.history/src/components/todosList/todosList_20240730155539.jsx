import { useState, useEffect } from 'react';
import { TODOS } from '../../constants/todos-link';
import styles from './TodosList.module.css';

export const TodosList = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		// fetch(`${TODOS}`)
		//     .then((loadedData) => loadedData.json())
		//     .then((loadedProducts) => {
		//         setTodos(loadedProducts);
		//     });
		const fetchTodos = async () => {
			try {
				const response = await fetch(TODOS);
				if (!response.ok) {
					throw new Error("Network response wasn't ok");
				}
				const loadedProducts = await response.json();
				// console.log(loadedProducts);
				setTodos(loadedProducts);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchTodos();
	}, []);

	if(isLoading) {
		return <div>Loading...</div>
	}
	return (
		<div>
			<h2>todos-list</h2>
			<ul>
				{todos &&
					todos.map((todo) => (
						<li className={styles.list_item} key={todo.id}>
							{todo.title}
						</li>
					))}
			</ul>
		</div>
	);
};

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
