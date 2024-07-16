import { useState } from 'react'
// import './App.module.css'
import styles from './App.module.css'





function App() {

  return (
    <>
      <div className={styles.app}>
        <label className={styles.appLabel} htmlFor="">Приложение</label>
        <div>Разная информация приложения</div>
        <div className={styles.user}>
          <div>Имя</div>
        </div>
      </div>
    </>
  )
}

export default App
