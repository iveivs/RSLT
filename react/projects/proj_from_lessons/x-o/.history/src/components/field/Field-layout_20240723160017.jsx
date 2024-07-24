import styles from "./Field.module.css";

export const FieldLayout = ({ field }) => (
    <div className={styles.field}>
        {field.map((cellPlayer, index) => (
            <button key={}>{cellPlayer}</button>
        ))}
    </div>
);
