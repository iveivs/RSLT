import PropTypes from 'prop types'

import styles from "./App.module.css";

function App() {
    const user = getUserFromServer();
    return (
        <>
            <div className={styles.app}>
                {/* <label className={styles.appLabel} htmlFor="">Приложение</label> */}
                <Label  color={`red`}>Приложение.</Label>
                <div>Разная информация приложения</div>
                {/* вариант 1 */}
                {/* < User name={user.name} age={user.age} phone={user.phone} email={user.email} /> */}

                {/* вариант 2 */}
                <User {...user} />
            </div>
        </>
    );
}

export default App; 
