import styles from "./Theme.module.css";
import { UseDispatch } from "react-redux";
export const ThemeButton = () => {
    const handleChangeTheme = () => {

    }
    return (
        <>
        <button onClick={handleChangeTheme} className={styles.theme_button}> ☼ </button>
        </>
    )
}