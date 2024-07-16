import { Contacts } from '../contacts/contacts';
import styles from './user.module.css';

export const User = ({name, age, ...contacts}) => {
    // const { name, age, ...contacts} = props
    return (
        <div className={styles.user}>
            <label className={st}></label>
            <div>Имя: {name}</div>
            <div>Возраст: {age}</div>
            <Contacts {...contacts} />
        </div>
    )
}