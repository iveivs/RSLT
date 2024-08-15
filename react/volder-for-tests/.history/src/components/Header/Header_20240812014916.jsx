import styles from './Header.module.css'
import { useContext } from 'react'
import { AppContext } from '../../AppContext';

function Header() {
    const someContext = useContext()
    console.log('someContext', someContext);
    return <>
    <div className={styles.someClass}> Title headert</div>

    <div className={styles.someClass2}> div for test</div>
    <div className={styles.someClass3}> div for test</div>
    </>
}

export default Header