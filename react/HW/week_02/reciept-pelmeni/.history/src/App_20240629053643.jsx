import { useState } from 'react';
import styles from './App.module.css';
import data from './data.json';

export  const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSteps] = useState(data)
	const [activeIndex, setActiveIndex] = useState(0)
	console.log('activeIndex', activeIndex);
	console.log('steps', steps);


	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const clickToBack = () => {
		if(activeIndex - 1 > 0 || activeIndex === 1){
			setActiveIndex(activeIndex - 1)
		}
	}

	const clickToForvard = () => {
		if(activeIndex + 1 < steps.length){
			setActiveIndex(activeIndex + 1)
		}
	}

	const startFromBegin = () => {
		setActiveIndex(0)
	}

	const startFrom = (position) => {
		// let numPosition = Number(position)
		// setActiveIndex(numPosition)
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						{/* Контент соответственный шагу. Сейчас активен шаг 3 */}
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']} onClick={(e) => {startFrom(e)}}>
						{steps.map((obj) => (
							<li key={obj.id} className={styles['steps-item'] + (activeIndex + 1  === Number(obj.id.slice(2)) ? ' ' + styles.active : ' ' + styles.done)}>
							{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
							<button className={styles['steps-item-button']}>{obj.id.slice(2)}</button>
							{/* При клике на кнопку установка выбранного шага в качестве активного */}
							{obj.title}
						</li>
						))}

					</ul>
					<div className={styles['buttons-container']}>
						<button onClick={clickToBack} className={styles.button} disabled={activeIndex === 0 ? true : false}>Назад</button>
						<button onClick={activeIndex + 1 === steps.length ? startFromBegin : clickToForvard } className={styles.button}>
							{activeIndex + 1 === steps.length ? 'Начать сначала' : 'Далее'}
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

