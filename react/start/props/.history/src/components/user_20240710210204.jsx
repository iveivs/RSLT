import styles from './user.module.css';

export const User = (props) => {
    return (
        <div className={styles.user}>
            <div>Имя:{props.name}</div>
            <div>Возраст:{props.age}</div>
            <div>
                <label htmlFor="">Контакты:</label>
                <div>Почта: {props.email}</div>
                <div>Телефон: {props.phone}</div>
            </div>
        </div>
    )
}