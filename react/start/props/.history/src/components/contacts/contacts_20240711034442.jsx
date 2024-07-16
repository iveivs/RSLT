import styles from './contacts.module.css'

export const Contacts = ({email, phone}) => {
    return (
        <div>
            <label className={} htmlFor="">Контакты:</label>
            <div>Почта: {email}</div>
            <div>Телефон: {phone}</div>
        </div>
    );
};
