import { useContext } from "react";
import { AppContext } from "../../../../context";
export const UserPersonalInfo = () => {
    const {name, age} = useContext(AppContext)

    
    return (
        <>
            <h3>Персональные данные:</h3>
            <div>Имя: {name}</div>
            <div>Возраст: {age} </div>
            <button onClick={onUserUpdate}>Обновить пользователя</button>
        </>
    )
}