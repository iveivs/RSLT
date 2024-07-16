import PropTypes from 'prop types'

import styles from "./App.module.css";

function App() {
    const user = getUserFromServer();
    return (
        <>
            <div className={styles.app}>
             
            </div>
        </>
    );
}

export default App; 
