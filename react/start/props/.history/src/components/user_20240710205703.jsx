import styles from './user.module.css';

export const User = (props) => {
    return (
        <div className={styles.user}>
            <div>Имя:{props.name}</div>
            <div>Возраст:{props.age}</div>
            <div>
                <label htmlFor="">Контакты:</label>
                <div>Почта:{user.email}</div>
                <div>Телефон:{user.phone}</div>
            </div>
        </div>
    )
}