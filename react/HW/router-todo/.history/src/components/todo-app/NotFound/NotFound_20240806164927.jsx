import { Link } from "react-router-dom"
import styles
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