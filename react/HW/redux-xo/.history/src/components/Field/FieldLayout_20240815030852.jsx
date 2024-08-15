export const FieldLayout = ({ field, handleClick, restartGame }) => {
	return (
		<>
			<div className={styles.container}>
				{field.map((elem, i) => (
					<div
						onClick={(e) => handleClick(e)}
						data-index={i}
						key={i}
						className={`${styles.fieldItem} ${styles.fieldItem + (i + 1)}`}
					></div>
				))}
			</div>
			<div className="cover_btn">
				<button onClick={restartGame} className={styles.restartGameBtn}>
					Начать заново
				</button>
			</div>
		</>
	);
};