import { useContext } from "react";
import { AppContext } from "../../../../context";
export const UserPersonalInfo = ({ name, age }) => {
    
    return (
        <>
            <h3>Персональные данные:</h3>
            <div>Имя: {name}</div>
            <div>Возраст: {age} </div>
        </>
    )
}