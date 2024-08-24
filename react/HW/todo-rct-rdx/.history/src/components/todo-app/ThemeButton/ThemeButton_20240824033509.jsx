import styles from "./Theme.module.css";
export const ThemeButton = () => {

    return (
        <>
        <button onClick={handleChange} className={styles.theme_button}> ☼ </button>
        </>
    )
}