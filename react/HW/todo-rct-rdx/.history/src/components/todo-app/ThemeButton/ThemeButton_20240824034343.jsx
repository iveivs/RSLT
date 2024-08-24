import styles from "./Theme.module.css";
import { useDispatch, useSelector } from "react-redux";
import {} 
export const ThemeButton = () => {
    const dispatch = useDispatch()
    let currentTheme = useSelector((state) => state.themeColor.currentTheme)
    console.log('currentTheme', currentTheme);
    const handleChangeTheme = () => {
        if(currentTheme === 'dark'){
            dispatch()
        }
    }
    return (
        <>
        <button onClick={handleChangeTheme} className={styles.theme_button}> ☼ </button>
        </>
    )
}