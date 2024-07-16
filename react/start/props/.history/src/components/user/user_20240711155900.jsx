import { Contacts } from '../contacts/contacts';
import styles from './user.module.css';
import { Label } from '../label/label';

export const User = ({name, age, ...contacts}) => {
    // const { name, age, ...contacts} = props
    return (
        <div className={styles.user}>
            {/* <label className={styles.userLabel}>Пользователь:</label> */}
            < Label title={(`контакты`)} color={`blueviolet`} />
            <div>Имя: {name}</div>
            <div>Возраст: {age}</div>
            <Contacts {...contacts} />
        </div>
    )
}