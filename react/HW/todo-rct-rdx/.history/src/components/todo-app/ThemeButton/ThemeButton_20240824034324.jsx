import styles from "./Theme.module.css";
import { useDispatch, useSelector } from "react-redux";

export const ThemeButton = () => {
    const dispatch = useDispatch()
    let currentTheme = useSelector((state) => state.themeColor.currentTheme)
    console.log('currentTheme', currentTheme);
    const handleChangeTheme = () => {
        if(currentTheme === 'dark')
    }
    return (
        <>
        <button onClick={handleChangeTheme} className={styles.theme_button}> ☼ </button>
        </>
    )
}