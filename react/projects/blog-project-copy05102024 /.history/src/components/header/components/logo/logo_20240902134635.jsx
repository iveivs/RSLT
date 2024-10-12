import { Link } from 'react-router-dom'
import styled from "styled-components";
import { Icon } from "../../../../components";

const LargeText = styled.div`
    font-size: 48px;
    font-weight: 600;
    margin-top: 10px;
`;
const SmallText = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const LogoContainer = ({ className }) => (
    <Link className={className} to="/" >
        <Icon id="fa-code" size="70px" margin="0 10px 0 0" />
        <div>
            <LargeText>Блог</LargeText>
            <SmallText>Веб-разработчика</SmallText>
        </div>
    </Link>
);

export const Logo = styled(LogoContainer)`
    display: flex;
    align-items: center;
    color: #222;
    text-decoration: none;
`