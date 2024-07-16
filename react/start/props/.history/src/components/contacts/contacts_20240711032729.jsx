export const Contacts = ({email, phone}) => {
    return (
        <div>
            <label htmlFor="">Контакты:</label>
            <div>Почта: {email}</div>
            <div>Телефон: {phone}</div>
        </div>
    );
};
