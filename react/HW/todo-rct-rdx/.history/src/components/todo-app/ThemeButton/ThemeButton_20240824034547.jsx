import styles from "./Theme.module.css";
import { useDispatch, useSelector } from "react-redux";
import { SET_DARK_THEME, SET_LIGHT_THEME} from '../../../actions'
export const ThemeButton = () => {
    const dispatch = useDispatch()
    let currentTheme = useSelector((state) => state.themeColor.currentTheme)
    console.log('currentTheme', currentTheme);
    const handleChangeTheme = () => {
        if(currentTheme === 'dark'){
            dispatch(SET_LIGHT_THEME)
        }
        if(currentTheme === 'light'){
            dispatch(SET_LIGHT_THEME)
        }
    }
    return (
        <>
        <button onClick={handleChangeTheme} className={styles.theme_button}> ☼ </button>
        </>
    )
}