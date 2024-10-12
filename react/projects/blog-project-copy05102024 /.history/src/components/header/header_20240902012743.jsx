import styled from 'styled-components'

import { Logo } from './components';

const HeaderContainer = ({ className }) => (
    <header className={className}>
        <Logo  />
    </header>
);

export const Header = styled(HeaderContainer)`
    height: 120px;
    padding: 20px 40px;
`