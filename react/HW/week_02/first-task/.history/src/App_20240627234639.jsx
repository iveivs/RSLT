import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div class="app">
				<h1 class="page-heading">Ввод значения</h1>
				<p class="no-margin-text">
					Текущее значение <code>value</code>: "
					<output class="current-value"></output>"
				</p>
				<div class="error">
					Введенное значение должно содержать минимум 3 символа
				</div>
				<div class="buttons-container">
					<button class="button">Ввести новое</button>
					<button class="button" disabled>
						Добавить в список
					</button>
				</div>
				<div class="list-container">
					<h2 class="list-heading">Список:</h2>
					<p class="no-margin-text">Нет добавленных элементов</p>
					<ul class="list">
						<li class="list-item">Первый элемент</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
