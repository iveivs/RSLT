import styles from './contacts.module.css'
import L

export const Contacts = ({email, phone}) => {
    return (
        <div>
            {/* <label className={styles.contactsLabel} htmlFor="">Контакты:</label> */}
            <div>Почта: {email}</div>
            <div>Телефон: {phone}</div>
        </div>
    );
};
