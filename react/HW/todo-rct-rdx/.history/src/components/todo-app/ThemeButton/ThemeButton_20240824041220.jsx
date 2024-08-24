import { useEffect } from "react";
import styles from "./Theme.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme, setLightTheme } from '../../../actions';

export const ThemeButton = () => {
    const dispatch = useDispatch();
    const { currentTheme, backgroundColor } = useSelector((state) => state.themeColor);

    const handleChangeTheme = () => {
        if (currentTheme === 'dark') {
            dispatch(setLightTheme());  
        } else if (currentTheme === 'light') {
            dispatch(setDarkTheme());
        }
    };

    useEffect(() => {
        document.body.style.backgroundColor = backgroundColor;
    }, [backgroundColor]);  

    return (
        <>
            <button onClick={handleChangeTheme} className={styles.theme_button}> {currentTheme === 'light' ? '☀' : '☼' }</button>✹
        </>
    );
};
