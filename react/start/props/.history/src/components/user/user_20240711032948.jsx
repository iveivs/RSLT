import { Contacts } from '../contacts/contacts';
import styles from './user.module.css';

export const User = ({}) => {
    // const { name, age, ...contacts} = props
    return (
        <div className={styles.user}>
            <div>Имя: {name}</div>
            <div>Возраст: {age}</div>
            <Contacts {...contacts} />
        </div>
    )
}