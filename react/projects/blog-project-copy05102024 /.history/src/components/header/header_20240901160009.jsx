import styled from 'styled-components'

const HeaderContainer = ({ className }) => (
    <header className={className}>
        <i class="fa fa-code" aria-hidden="true"></i>
    </header>
);

export const Header = styled(Header)`
height: 120px;
`