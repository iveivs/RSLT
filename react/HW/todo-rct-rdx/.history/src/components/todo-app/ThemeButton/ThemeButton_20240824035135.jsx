import styles from "./Theme.module.css";
import { useDispatch, useSelector } from "react-redux";
import { SET_DARK_THEME, SET_LIGHT_THEME} from '../../../actions'
export const ThemeButton = () => {
    const dispatch = useDispatch()
    let {currentTheme, backgroundColor} = useSelector((state) => state.themeColor)
    console.log('currentTheme', currentTheme);
    console.log('backgroundColor', backgroundColor);
    const handleChangeTheme = () => {
        if(currentTheme === 'dark'){
            dispatch(SET_LIGHT_THEME)
            document.body.style.backgroundColor = backgroundColor
            console.log('WAS CHANGE');
        }
        if(currentTheme === 'light'){
            dispatch(SET_DARK_THEME)
            document.body.style.backgroundColor = backgroundColor
            console.log('WAS CHANGE');
        }
    }
    return (
        <>
        <button onClick={handleChangeTheme()} className={styles.theme_button}> ☼ </button>
        </>
    )
}