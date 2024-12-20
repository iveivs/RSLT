import styled from 'styled-components'
import { Logo } from './components';

const Description = styled.div`

`

const HeaderContainer = ({ className }) => (
    <header className={className}>
        <Logo  />
        <Description>Веб-технологии<br />Написание кодв</br> Разбор ошибок</Description>
    </header>
);

export const Header = styled(HeaderContainer)`
    position: fixed;
    top: 0;
    width: 1000px; 
    height: 120px;
    padding: 20px 40px;
    background-color: #fff;
    box-shadow: 0px -2px 17px #000;
`