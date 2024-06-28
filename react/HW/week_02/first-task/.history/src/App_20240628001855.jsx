import { useState } from 'react';
// import './App.css';
import styles from './App.module.css'

function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const onInputButtonClick = () => {
		let promptValue = prompt('Введите значение')
		console.log('currentValue', promptValue);


		if(promptValue.length > 3 ){
			setValue(promptValue)
			setError(Э)
		} else {
			setError('Введённое значение должно быть длиннее 3 символов')
		}
	}

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles['page-heading']}>Ввод значения</h1>
				<p className={styles["no-margin-text"]}>
					Текущее значение <code>value</code>: "
					<output className={styles["current-value"]}>{value}</output>"
				</p>
				<div className={styles.error}>
					Введенное значение должно содержать минимум 3 символа
				</div>
				<div className={styles["buttons-container"]}>
					<button className={styles.button} onClick={onInputButtonClick}>Ввести новое</button>
					<button className={styles.button} disabled>
						Добавить в список
					</button>
				</div>
				<div className={styles["list-container"]}>
					<h2 className={styles["list-heading"]}>Список:</h2>
					<p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
					<ul className={styles.list}>
						<li className={styles["list-item"]}>Первый элемент</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
