import styled from 'styled-components'
import { ControlPanel ,Logo } from './components';

const Description = styled.div`
    font-style: italic;
`

const HeaderContainer = ({ className }) => (
    <header className={className}>
        <Logo  />
        <Description>Веб-технологии<br />Написание кода<br /> Разбор ошибок</Description>
        <ControlPanel  />
    </header>
);

export const Header = styled(HeaderContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 1000px; 
    height: 120px;
    padding: 20px 40px;
    background-color: #fff;
    box-shadow: 0px -2px 17px #000;
    border-bottom-left-radius: 20px 20px;
    border-bottom-right-radius: 20px 20px;
    z-index: 10
`