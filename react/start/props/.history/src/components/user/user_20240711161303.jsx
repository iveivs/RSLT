import { Contacts } from '../contacts/contacts';
import styles from './user.module.css';
import { Label } from '../label/label';

export const User = ({name, age, ...contacts}) => {
    // const { name, age, ...contacts} = props
    return (
        <div className={styles.user}>
            {/* <label className={styles.userLabel}>Пользователь:</label> */}
            < Label title={(`Пользователь`)} color={`blueviolet`}></Label>
            <div>Имя: {name}</div>
            <div>Возраст: {age}</div>
            <Contacts {...contacts} />
        </div>
    )
}