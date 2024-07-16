import { useState } from 'react'
// import './App.module.css'
import styles from './App.module.css'

const getUserFromServer = () => ({
  name: 'Alex',
  age: 123,
  phone: '+123-456',
  email: 'user@email.com'
})

function App() {
  const user = getUserFromServer()
  return (
    <>
      <div className={styles.app}>
        <label className={styles.appLabel} htmlFor="">Приложение</label>
        <div>Разная информация приложения</div>
        <div className={styles.user}>
          <div>Имя:{user.}</div>
          <div>Возраст:</div>
          <div>
            <label htmlFor="">Контакты:</label>
            <div>Почта:</div>
            <div>Телефон:</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
