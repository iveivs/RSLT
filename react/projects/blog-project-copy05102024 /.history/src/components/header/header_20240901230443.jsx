import styled from 'styled-components'

import { Logo } from './components';

function HeaderContainer({ className }) {
    return (
        <header className={className}>
            <i class="fa fa-code" aria-hidden="true"></i>
            <Logo />
        </header>
    );
}

export const Header = styled(HeaderContainer)`
height: 120px;
`