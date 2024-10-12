import { Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'
import { useDispatch } from 'react-redux'
import { setUser } from './actions'
import { Authorization, Registration, Users, Post } from './pages'
import styled from 'styled-components'
import { useLayoutEffect } from 'react'
// npx json-server src/db.json запуск сервера
const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #fff;
`

const Page = styled.div`
  padding: 120px 0 20px;
`

function Blog() {
  const dispatch = useDispatch()
  useLayoutEffect(()=> {
    const currentUserDataJSON = sessionStorage.getItem('userData')

    if(!currentUserDataJSON) {
      return
    }

    const currentUserData = 

    dispatch(setUser({
      ...currentUserData,
      roleId: Number(currentUserData.roleId)
    }))
  }, [dispatch])

  return (
    <AppColumn>
      <Header />
      <Page>
        <Routes>
          <Route path='/' element={<div>Главная страница</div>} />
          <Route path='/login' element={<Authorization />} />
          <Route path='/register' element={<Registration  />} />
          <Route path='/users' element={<Users />} />
          <Route path='/post' element={<div>Новая статья</div>} />
          <Route path='/post/:id' element={<Post  />} />
          <Route path='*' element={<div>Ошибка</div>} />
        </Routes>
      </Page>
      <Footer />
    </AppColumn>
  )
}

export default Blog
