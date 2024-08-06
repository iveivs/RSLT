import { Link, useNavigate } from "react-router-dom"
import styles from './NotFound.module.css'
export const NotFound = () => {
    const navigate = useNavigate()
    // navigate('/404')
    return (
        <div className={styles.error_container}>
            <p>Страница не найденa</p>
            <Link to="/">
                <button className={styles.error_btn}>
                На главную
                </button>
            </Link>
        </div>
    )
}