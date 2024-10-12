import styled from 'styled-components'

const LargeText = styled.div`
    font-size: 24px;
    font-weight: bold;
`
const SmallText = styled.div`
    font-size: 16px;
    font-weight: bold;
`
const IconContainer = () => (
    <div className={className}></div>
    <i className="fa fa-code" aria-hidden="true"></i>
)


const LogoContainer = ({ className }) => (
    <div className={className}>
       
        <div>
            <LargeText>Блок</LargeText>
            <SmallText>Веб-разработчика</SmallText>
        </div>
    </div>
)

export const Logo = styled(LogoContainer)`
    display: flex;
`