import styled from 'styled-components'

const LargeText = styled.div`
    font-size: 24px;
    font-weight: bold;
`
const SmallText = styled.div`
    font-size: 16px;
    font-weight: bold;
`

const LogoContainer = ({ className }) => (
    <div className={className}>
        <i class="fa fa-code" aria-hidden="true"></i>
        <div>
            <LargeText>Блок</LargeText>
            <SmallText>Веб-разработчика</SmallText>
        </div>
    </div>
)

export const Logo = styled(LogoContainer)`
    display
`