import styles from "./Field.module.css";

export const FieldLayout = ({ field, handleCellClick }) => (
    <div className={styles.field}>
        {field.map((cellPlayer, index) => (
            <button
                key={index}
                className={styles.cell}
                onClick={() => handleCellClick(index)}
            >
                { cellPlayer}
            </button>
        ))}
    </div>
);
