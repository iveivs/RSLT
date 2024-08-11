import { useContext } from "react";
import { AppContext } from "../../../../context";
export const UserPersonalInfo = () => {
    const {name, age} = useContext(AppContext)

    const onUserUpdate = () => {
        // если бы использовали добавление в стейт с помощью setUserUodate например
        // setUserUodate({ name, age: 30, email, phone})

        const newUserData = { name, age: 30, email, phone}

        dispatch({ type: 'SET_USER_UPDATE', payload: })
    }
    return (
        <>
            <h3>Персональные данные:</h3>
            <div>Имя: {name}</div>
            <div>Возраст: {age} </div>
            <button onClick={onUserUpdate}>Обновить пользователя</button>
        </>
    )
}