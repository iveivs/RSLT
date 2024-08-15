import { useContext } from "react";
import { AppContext } from "../../../../context";
import {} from 
export const UserContacts = () => {
    console.log();
    const {email, phone} = useContext(AppContext)
    return (
        <>
            <h3>Контакты: </h3>
            <div>Почта: {email}</div>
            <div>Телефон: {phone}</div>
        </>
    )
}