import { useState } from 'react'
// import './App.module.css'
import styles from './App.module.css'

const someObj = () => ({
  name: 'Alex',
  age: 123,
  phone: '+123-456',
  email
})

function App() {

  return (
    <>
      <div className={styles.app}>
        <label className={styles.appLabel} htmlFor="">Приложение</label>
        <div>Разная информация приложения</div>
        <div className={styles.user}>
          <div>Имя:</div>
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
