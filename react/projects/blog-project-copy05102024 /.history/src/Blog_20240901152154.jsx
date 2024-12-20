import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

const AppColumn = styled.div`
  display: flex;
  flex-
`

const Content = styled.div`
  padding: 120px 0;
`
const H2 = styled.h2`
  text-align: center
`


const Header = () => <div>Шапка</div>
const Footer = () => <div>Футер</div>
function Blog() {

  return (
    <AppColumn>
      <Header />
      <Content>
        <H2>Контент страницы</H2>
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
    </AppColumn>
  )
}

export default Blog
