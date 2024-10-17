import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

const Content = styled.div`
  text-align: center
`
const Header = () => <div>Шапка</div>
const Footer = () => <div>Футер</div>
function Blog() {

  return (
    <>
      <Header />
      <Content>
        <h2>Контент страницы</h2>
        <Routes>
          <Route path='/' element={<div>Главная страница</div>} />
          <Route path='/login' element={<div>Авторизация </div>} />
          <Route path='/register' element={<div>Регистрация</div>} />
          <Route path='/users' element={<div>Пользователи</div>} />
          <Route path='/post/:post' element={<div>Пользователи</div>} />
        </Routes>
      </Content>
      <Footer />
    </>
  )
}

export default Blog