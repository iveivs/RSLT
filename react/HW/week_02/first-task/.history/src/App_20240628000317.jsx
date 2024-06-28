import { useState } from 'react';
// import './App.css';
import styles from './App.module.css'

function App() {
	const [count, setCount] = useState(0);
	const openPrompt = () => {
		let currentValue = prompt('Введите значение')
	}
	// {styles[]}
	return (
		<>
			<div className={styles.app}>
				<h1 className={styles['page-heading']}>Ввод значения</h1>
				<p className={styles["no-margin-text"]}>
					Текущее значение <code>value</code>: "
					<output className={styles["current-value"]}></output>"
				</p>
				<div className={"error">
					Введенное значение должно содержать минимум 3 символа
				</div>
				<div className="buttons-container">
					<button className="button" onClick={openPrompt}>Ввести новое</button>
					<button className="button" disabled>
						Добавить в список
					</button>
				</div>
				<div className="list-container">
					<h2 className="list-heading">Список:</h2>
					<p className="no-margin-text">Нет добавленных элементов</p>
					<ul className="list">
						<li className="list-item">Первый элемент</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
