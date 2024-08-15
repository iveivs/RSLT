import { store } from "../../../../store"
export const UserContacts = () => {
    console.log();
    const {email, phone} = store.getState()
    return (
        <>
            <h3>Контакты: </h3>
            <div>Почта: {email}</div>
            <div>Телефон: {phone}</div>
        </>
    )
}