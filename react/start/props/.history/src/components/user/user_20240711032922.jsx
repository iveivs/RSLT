import { Contacts } from '../contacts/contacts';
import styles from './user.module.css';

export const User = (props) => {
    const { name, age, ...contacts} = props
    return (
        <div className={styles.user}>
            <div>Имя: {name}</div>
            <div>Возраст: {age}</div>
            <Contacts {} />
        </div>
    )
}