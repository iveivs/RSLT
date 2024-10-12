import styled from 'styled-components'


const LogoContainer = ({ className }) => (
    <div className={className}>
        <i class="fa fa-code" aria-hidden="true"></i>
        <div>
            <div>Блок</div>
            Веб
        </div>
    </div>
)

export const Logo = styled(LogoContainer)`

`