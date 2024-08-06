// import { Link, useNavigate } from "react-router-dom"
// import styles from './NotFound.module.css'
// export const NotFound = () => {
//     const navigate = useNavigate()
//     navigate('/404')
//     return (
//         <div className={styles.error_container}>
//             <p>Страница не найденa</p>
//             <Link to="/">
//                 <button className={styles.error_btn}>
//                 На главную
//                 </button>
//             </Link>
//         </div>
//     )
// }

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from './NotFound.module.css';

export const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/404');
    }, [navigate]);

    return (
        <div className={styles.error_container}>
            <p>Страница не найдена</p>
            <Link to="/">
                <button className={styles.error_btn}>
                    На главную
                </button>
            </Link>
        </div>
    );
};
