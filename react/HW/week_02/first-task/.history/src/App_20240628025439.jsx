import { useState } from 'react';
import styles from './App.module.css';
const date = new Date();
let local = date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
})
console.log(date);

function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const onInputButtonClick = () => {
		let promptValue = prompt('Введите значение');

		if (promptValue.length >= 3) {
			setValue(promptValue);
			setError('');
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
		}
	};
	let isValueVaild;
	value.length >= 3 ? (isValueVaild = true) : (isValueVaild = false);

	const onAddButtonClick = () => {
		const updatedList = [...list, { id: Date.now(),
			value }]
		setList(updatedList)

		// setList([...list, { id: Date.now(), value }]);
		// setList((prevList) => [...prevList, { id: Date.now(), value }])
	}
	return (
		<>
			<div className={styles.app}>
				<h1 className={styles['page-heading']}>Ввод значения</h1>
				<p className={styles['no-margin-text']}>
					Текущее значение <code>value</code>: "
					<output className={styles['current-value']}>{value}</output>"
				</p>
				{error !== '' && <div className={styles.error}>{error}</div>}
				<div className={styles['buttons-container']}>
					<button className={styles.button} onClick={onInputButtonClick}>
						Ввести новое
					</button>
					<button
						disabled={!isValueVaild}
						className={styles.button}
						onClick={onAddButtonClick}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles['list-container']}>
					<h2 className={styles['list-heading']}>Список:</h2>
					<ul className={styles.list}>
						{list.length > 0 ? list.map((obj) => <li className={styles['list-item']} key={obj.id}> {obj.value}</li>) : <p className={styles['no-margin-text']}>Нет добавленных элементов</p>}
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
