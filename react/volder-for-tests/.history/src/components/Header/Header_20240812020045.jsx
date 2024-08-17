import styles from './Header.module.css'
import { useContext } from 'react'
import { AppContext } from '../../AppContext';

function Header() {
    const {dataForContext, anotherDataForContext, setAnotherDataForContext} = useContext(AppContext)
    // console.log('dataForContext', dataForContext);
    // console.log('anotherDataForContext', anotherDataForContext);
    return <>
    <div className={styles.someClass}> Title headert</div>

    <div className={styles.someClass2}> div for test</div>
    <div className={styles.someClass3}> div for test</div>
    <div>Some Data From Context : {anotherDataForContext.someField}</div>
    <button onClick={() => }>Change Text setAnotherDataForContext</button>
    </>
}

export default Header