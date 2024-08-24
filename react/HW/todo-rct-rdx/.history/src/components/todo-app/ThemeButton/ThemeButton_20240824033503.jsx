import styles from "./Theme.module.css";
export const ThemeButton = () => {

    return (
        <>
        <button onClick={handle} className={styles.theme_button}> ☼ </button>
        </>
    )
}