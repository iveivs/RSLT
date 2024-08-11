
export const UserContacts = ({ id, phone, email }) => {
    console.log('TEST UsCOn');
    return (
        <>
            <h3>Контакты: </h3>
            <div>Почта: {email}</div>
            <div>Телефон: {phone}</div>
        </>
    )
}