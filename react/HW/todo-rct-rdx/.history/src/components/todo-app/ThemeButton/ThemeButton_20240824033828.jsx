import styles from "./Theme.module.css";
import { useDispatch } from "react-redux";
export const ThemeButton = () => {
    const handleChangeTheme = () => {

    }
    return (
        <>
        <button onClick={handleChangeTheme} className={styles.theme_button}> ☼ </button>
        </>
    )
}