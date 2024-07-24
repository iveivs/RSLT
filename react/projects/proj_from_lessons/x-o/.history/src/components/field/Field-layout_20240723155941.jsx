import styles from "./Field.module.css";

export const FieldLayout = ({ field }) => (
    <div className={styles.field}>
        {field.map((cellPlayer) => (
            <button >{cellPlayer}</button>
        ))}
    </div>
);
