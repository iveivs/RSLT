export const Contacts = ({}) => {
    return (
        <div>
            <label htmlFor="">Контакты:</label>
            <div>Почта: {props.email}</div>
            <div>Телефон: {props.phone}</div>
        </div>
    );
};
