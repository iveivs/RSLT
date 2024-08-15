import styles from './Header.module.css'
import { useContext } from 'react'
import { AppContext } from '../../AppContext';

function Header() {
    const { dataForContext, anotherDataForContext, setAnotherDataForContext, dispatch } = useContext(AppContext)
    // console.log('dataForContext', dataForContext);
    // console.log('anotherDataForContext', anotherDataForContext);
    return <>
    <div className={styles.someClass}> Title headert</div>

    <div className={styles.someClass2}> div for test</div>
    <div className={styles.someClass3}> div for test</div>
    <div>Some Data From Context : {anotherDataForContext.someField}</div>
    <button onClick={() => {setAnotherDataForContext({someField: 'I am new Date'})}}>Change Text </button>
    <button onClick={dispatch({type:  'SET_NAME_IN_STATE', payload})}></button>
    <button></button>
    </>
}

export default Header