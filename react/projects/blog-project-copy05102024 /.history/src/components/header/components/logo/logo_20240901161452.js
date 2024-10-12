import styled from 'styled-components'

const LargeText = styled.div`
    font-size: 24px;
    font-weight
`

const LogoContainer = ({ className }) => (
    <div className={className}>
        <i class="fa fa-code" aria-hidden="true"></i>
        <div>
            <div>Блок</div>
            <div>Веб-разработчика</div>
        </div>
    </div>
)

export const Logo = styled(LogoContainer)`

`