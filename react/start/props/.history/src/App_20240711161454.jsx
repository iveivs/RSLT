import { User, Label } from "./components";
import { useState } from "react";
// import './App.module.css'
import styles from "./App.module.css";

const getUserFromServer = () => ({
    name: "Alex",
    age: 123,
    phone: "+123-456",
    email: "user@email.com",
});

function App() {
    const user = getUserFromServer();
    return (
        <>
            <div className={styles.app}>
                {/* <label className={styles.appLabel} htmlFor="">Приложение</label> */}
                <Label  color={`red`}></Label>
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
