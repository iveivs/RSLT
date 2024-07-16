export const User = () => {
    return (
        <div className={styles.user}>
            <div>Имя:{user.name}</div>
            <div>Возраст:{user.age}</div>
            <div>
                <label htmlFor="">Контакты:</label>
                <div>Почта:{user.email}</div>
                <div>Телефон:{user.phone}</div>
            </div>
        </div>
    )
}