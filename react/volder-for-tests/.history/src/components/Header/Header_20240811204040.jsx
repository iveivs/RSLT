import styles from './Header.module.css'
import { useContext } from 'react'

function Header() {
    const someContext = useContext()
    return <>
    <div className={styles.someClass}> Title headert</div>

    <div className={styles.someClass2}> div for test</div>
    <div className={styles.someClass3}> div for test</div>
    </>
}

export default Header