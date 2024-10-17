import { Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'
import { Authorization, Registration, Users, Post } from './pages'
import styled from 'styled-components'
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
  padding: 120px 0 20;
`

function Blog() {

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