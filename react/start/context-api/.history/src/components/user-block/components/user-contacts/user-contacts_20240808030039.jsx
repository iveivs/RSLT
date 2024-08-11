import { useContext } from "react";
import { AppContext } from "../../../../context";
export const UserContacts = ({ id, phone, email }) => {
    const {email, phone} = useContext(App)
    return (
        <>
            <h3>Контакты: </h3>
            <div>Почта: {email}</div>
            <div>Телефон: {phone}</div>
        </>
    )
}