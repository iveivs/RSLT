import { User} from './components'
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
        < User />
      </div>
    </>
  )
}

export default App
