import { Link } from "react-router-dom"
import styles from './NotFound.module'
export const NotFound = () => {
    return (
        <div>
            <p>Страница не найденa</p>
            <Link to="/">
                <button className={styles.error_btn}>
                На главную
                </button>
            </Link>
        </div>
    )
}