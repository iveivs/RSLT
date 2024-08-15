import { store } from '../../../../store'
export const UserPersonalInfo = () => {
    

    const onUserUpdate = () => {
        // если бы использовали добавление в стейт с помощью setUserUodate например
        // setUserUodate({ name, age: 30, email, phone})

        const newUserData = { name, age: 30, email, phone }

        store.dispatch({ type: 'SET_USER_DATA', payload: newUserData})
    }
    const onUserAgeDecrease = () => {
        store.dispatch({ type: 'SET_USER_AGE', payload: 15})
    }
    onUserAgeDecrease
    return (
        <>
            <h3>Персональные данные:</h3>
            <div>Имя: {name}</div>
            <div>Возраст: {age} </div>
            <button onClick={onUserUpdate}>Обновить пользователя</button>
            <button onClick={onUserAgeDecrease}>Уменьшить возраст пользователя</button>
        </>
    )
}