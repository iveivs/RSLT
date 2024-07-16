import { Contacts } from '../contacts/contacts';
import styles from './user.module.css';

export const User = (props) => {
    const 
    return (
        <div className={styles.user}>
            <div>Имя: {props.name}</div>
            <div>Возраст: {props.age}</div>
            <Contacts  />
        </div>
    )
}