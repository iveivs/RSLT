import styled from 'styled-components'

const Header = ({ className }) => (
    <header className={className}>
        <i class="fa fa-code" aria-hidden="true"></i>
    </header>
);

export const StyledHeader = styled(Header)`
height: 120px;
`