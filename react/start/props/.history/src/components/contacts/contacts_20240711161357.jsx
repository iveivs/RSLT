import styles from './contacts.module.css'
import { Label } from '../label/label';

export const Contacts = ({email, phone}) => {
    return (
        <div>
            <Label color={`purple`}>Контакты</Label>
            {/* <label className={styles.contactsLabel} htmlFor="">Контакты:</label> */}
            <div>Почта: {email}</div>
            <div>Телефон: {phone}</div>
        </div>
    );
};
