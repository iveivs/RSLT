import styled from 'styled-components'

const Content = styled.div`
  text-align: center
`

function Blog() {

  return (
    <>
      {/* <Header /> */}
      <Content>
        <p>BLOG</p>
        <i className="fa fa-camera-retro"></i>
        <br />
        <i className="fa fa-calendar" aria-hidden="true"></i> 
        <div>456</div>
        {/* <Footer /> */}
      </Content>
    </>
  )
}

export default Blog
