import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

const Content = styled.div`
  padding: 120px
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
          <Route path='/post' element={<div>Новая статья</div>} />
          <Route path='/post/:postId' element={<div>Статья</div>} />
          <Route path='*' element={<div>Ошибка</div>} />
        </Routes>
      </Content>
      <Footer />
    </>
  )
}

export default Blog
