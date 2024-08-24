import styles from "./Theme.module.css";
export const ThemeButton = () => {
    const handleChangeTheme =  ()
    return (
        <>
        <button onClick={handleChangeTheme} className={styles.theme_button}> ☼ </button>
        </>
    )
}