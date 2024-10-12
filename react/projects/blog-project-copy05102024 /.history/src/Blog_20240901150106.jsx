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
          <Route />
        </Routes>
      </Content>
      <Footer />
    </>
  )
}

export default Blog
