export const UserContacts = ({ id, phone, email, }) => {
    return (
        <>
            <h3>Контакты: </h3>
            <div>Почта: {email}</div>
            <div>Телефон: {phone}</div>
        </>
    )
}