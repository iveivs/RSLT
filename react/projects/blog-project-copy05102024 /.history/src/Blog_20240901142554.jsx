import styled from 'styled-components'

const Div = styled.div`
  text-align: center
`

function Blog() {

  return (
    <>
      {/* <Header />/}
      <Div>
        <p>BLOG</p>
        <i className="fa fa-camera-retro"></i>
        <br />
        <i className="fa fa-calendar" aria-hidden="true"></i> 
        <div>456</div>
        {/* <Footer  />< Footer> */}
      </Div>
    </>
  )
}

export default Blog
