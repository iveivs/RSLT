import styles from "./Theme.module.css";
import { useDispatch, useSelector } from "react-redux";
export const ThemeButton = () => {
    let currentTheme = useSelector((state) => state.themeColor)
    const handleChangeTheme = () => {

    }
    return (
        <>
        <button onClick={handleChangeTheme} className={styles.theme_button}> ☼ </button>
        </>
    )
}